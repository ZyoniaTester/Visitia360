// navMobile.js
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobileMenuBtn");
  const mainNav = document.getElementById("mainNav");
  const navRight = document.getElementById("navRight");

  if (!btn || !mainNav || !navRight) {
    console.warn("Visitia Nav: faltan elementos (mobileMenuBtn/mainNav/navRight)");
    return;
  }

  const toggleMenu = () => {
    btn.classList.toggle("active");
    mainNav.classList.toggle("active");
    navRight.classList.toggle("active");
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Cierra al click fuera
  document.addEventListener("click", (e) => {
    const clickInside =
      mainNav.contains(e.target) || navRight.contains(e.target) || btn.contains(e.target);

    if (!clickInside) {
      btn.classList.remove("active");
      mainNav.classList.remove("active");
      navRight.classList.remove("active");
    }
  });

  // Cierra al cambiar tamaño a desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) {
      btn.classList.remove("active");
      mainNav.classList.remove("active");
      navRight.classList.remove("active");
    }
  });
});
