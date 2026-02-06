(() => {
  const header = document.querySelector(".site-header");
  const btn = document.getElementById("mobileMenuBtn");
  const nav = document.getElementById("mainNav");
  const navRight = document.getElementById("navRight");

  if (!header || !btn || !nav) return;

  const closeMenu = () => header.classList.remove("nav-open");

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    header.classList.toggle("nav-open");
  });

  // Cerrar si clickeas un link del menú
  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeMenu();
  });

  // Cerrar si clickeas fuera
  document.addEventListener("click", (e) => {
    if (!header.classList.contains("nav-open")) return;
    const insideNav = nav.contains(e.target) || (navRight && navRight.contains(e.target)) || btn.contains(e.target);
    if (!insideNav) closeMenu();
  });

  // Cerrar en resize a desktop
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeMenu();
  });
})();
