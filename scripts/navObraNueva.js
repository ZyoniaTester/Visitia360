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

  nav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeMenu();
  });

  document.addEventListener("click", (e) => {
    if (!header.classList.contains("nav-open")) return;
    const inside = nav.contains(e.target) || (navRight && navRight.contains(e.target)) || btn.contains(e.target);
    if (!inside) closeMenu();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) closeMenu();
  });
})();
