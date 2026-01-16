let lastScrollTop = 0;
const header = document.querySelector('.site-header');
let isHoveringTopZone = false;

// Mostrar nav cuando estás arriba del todo
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 10) {
    header.classList.add('show-nav');
    header.classList.remove('hide-nav');
    return;
  }

  // Scroll hacia abajo → ocultar
  if (currentScroll > lastScrollTop && !isHoveringTopZone) {
    header.classList.add('hide-nav');
    header.classList.remove('show-nav');
  }

  // Scroll hacia arriba → mostrar
  if (currentScroll < lastScrollTop) {
    header.classList.add('show-nav');
    header.classList.remove('hide-nav');
  }

  lastScrollTop = currentScroll;
});