const track = document.querySelector('.carousel-track');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
  const images = document.querySelectorAll('.carousel img');
  if (currentIndex < images.length - 1) {
    currentIndex++;
    track.style.transform = `translateX(-${currentIndex * 270}px)`;
  }
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    track.style.transform = `translateX(-${currentIndex * 270}px)`;
  }
});