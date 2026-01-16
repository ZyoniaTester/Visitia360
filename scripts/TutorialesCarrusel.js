const carousels = document.querySelectorAll(".tutorial-carousel");

carousels.forEach((carousel) => {
  let isDown = false;
  let startX;
  let scrollLeft;

  carousel.addEventListener("mousedown", (e) => {
    isDown = true;
    carousel.classList.add("active");
    startX = e.pageX - carousel.offsetLeft;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("mouseleave", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mouseup", () => {
    isDown = false;
    carousel.classList.remove("active");
  });

  carousel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carousel.offsetLeft;
    const walk = (x - startX) * 1.6; // velocidad del arrastre
    carousel.scrollLeft = scrollLeft - walk;
  });

  // ✅ Soporte táctil (móvil)
  carousel.addEventListener("touchstart", (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = carousel.scrollLeft;
  });

  carousel.addEventListener("touchmove", (e) => {
    const x = e.touches[0].pageX;
    const walk = (x - startX) * 1.4;
    carousel.scrollLeft = scrollLeft - walk;
  });
});
