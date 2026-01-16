// Detectar cuando el mouse se acerca al tope
document.addEventListener('mousemove', (e) => {
  if (e.clientY < 80) {       // zona superior de activación
    isHoveringTopZone = true;
    header.classList.add('show-nav');
    header.classList.remove('hide-nav');
  } else {
    isHoveringTopZone = false;
  }
});
