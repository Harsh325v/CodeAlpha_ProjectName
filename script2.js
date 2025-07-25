let screen = document.getElementById('screen');
let currentInput = '';

function appendNumber(num) {
  if (screen.textContent === '0' || screen.textContent === 'Error') {
    currentInput = num;
  } else {
    currentInput += num;
  }
  screen.textContent = currentInput;
}

function appendOperator(op) {
  if (currentInput === '' || /[+\-*/%]$/.test(currentInput)) return;
  currentInput += op;
  screen.textContent = currentInput;
}

function clearScreen() {
  currentInput = '';
  screen.textContent = '0';
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  screen.textContent = currentInput || '0';
}

function calculate() {
  try {
    currentInput = eval(currentInput.replace(/×/g, '*').replace(/÷/g, '/')).toString();
    screen.textContent = currentInput;
  } catch {
    screen.textContent = 'Error';
    currentInput = '';
  }
}