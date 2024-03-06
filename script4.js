let slideIndex = 0;
const slides = document.querySelectorAll('.slider img');

function showSlides() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${-100 * slideIndex}%)`;
  });
}

function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlides();
}

function prevSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlides();
}

let autoSlideInterval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds

// Stop auto-slide on hover
document.querySelector('.slider-container').addEventListener('mouseenter', () => {
  clearInterval(autoSlideInterval);
});

// Restart auto-slide on mouse leave
document.querySelector('.slider-container').addEventListener('mouseleave', () => {
  autoSlideInterval = setInterval(nextSlide, 3000);
});
