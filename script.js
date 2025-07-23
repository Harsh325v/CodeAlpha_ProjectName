let currentIndex = 0;
let galleryImages = [];

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  lightbox.style.display = 'flex';
  lightboxImg.src = src;

  galleryImages = Array.from(document.querySelectorAll('.gallery .image img'))
                       .map(img => img.src);
  currentIndex = galleryImages.indexOf(src);
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function changeImage(n) {
  currentIndex += n;
  if (currentIndex < 0) currentIndex = galleryImages.length - 1;
  if (currentIndex >= galleryImages.length) currentIndex = 0;
  document.getElementById('lightbox-img').src = galleryImages[currentIndex];
}

function filterImages(category) {
  const allImages = document.querySelectorAll('.gallery .image');
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
