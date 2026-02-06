(() => {
  const btnOpen = document.getElementById("mobileMenuBtn");
  const overlay = document.getElementById("mobileNavOverlay");
  const btnClose = document.getElementById("mobileNavCloseBtn");

  if (!btnOpen || !overlay || !btnClose) return;

  const open = () => {
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.classList.add("is-locked");
  };

  const close = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.classList.remove("is-locked");
  };

  btnOpen.addEventListener("click", open);
  btnClose.addEventListener("click", close);

  overlay.addEventListener("click", (e) => {
    if (e.target.matches("[data-close-mobile-nav]")) close();
  });

  // Cerrar con ESC
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("is-open")) close();
  });

  // Cerrar al hacer click en un link del menú
  overlay.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", close);
  });
})();
