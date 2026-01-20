const images = document.querySelectorAll(".promotoras-carousel .carousel-img");
let current = 0;

function showNextImage() {
  images[current].classList.remove("active");
  current = (current + 1) % images.length;
  images[current].classList.add("active");
}

// Cambia cada 4 segundos
setInterval(showNextImage, 4000);
