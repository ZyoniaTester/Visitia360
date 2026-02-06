document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("mobileMenuBtn"); // 👈 tu id real
  const nav = document.getElementById("mainNav");       // 👈 tu id real
  const navRight = document.getElementById("navRight"); // opcional (botones derecha)

  if (!btn || !nav) {
    console.warn("No encontré #mobileMenuBtn o #mainNav", { btn, nav });
    return;
  }

  const closeMenu = () => {
    nav.classList.remove("show");
    btn.classList.remove("is-open");
    btn.setAttribute("aria-expanded", "false");
    if (navRight) navRight.classList.remove("show");
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    nav.classList.toggle("show");
    btn.classList.toggle("is-open");
    const open = nav.classList.contains("show");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
    if (navRight) navRight.classList.toggle("show", open);
  };

  btn.setAttribute("role", "button");
  btn.setAttribute("tabindex", "0");
  btn.setAttribute("aria-expanded", "false");

  btn.addEventListener("click", toggleMenu);
  btn.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") toggleMenu(e);
  });

  // Cierra al tocar fuera
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) closeMenu();
  });

  // Cierra con ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Cierra al hacer scroll (opcional)
  window.addEventListener("scroll", closeMenu, { passive: true });
});
