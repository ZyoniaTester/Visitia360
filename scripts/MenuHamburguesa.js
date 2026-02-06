const mobileBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");
const navRight = document.getElementById("navRight");

function openMenu() {
  mobileBtn.classList.add("active");
  mainNav.classList.add("active");
  navRight.classList.add("active");
  document.body.classList.add("nav-open"); // para bloquear scroll
}

function closeMenu() {
  mobileBtn.classList.remove("active");
  mainNav.classList.remove("active");
  navRight.classList.remove("active");
  document.body.classList.remove("nav-open");
}

function toggleMenu() {
  const isOpen = mobileBtn.classList.contains("active");
  isOpen ? closeMenu() : openMenu();
}

mobileBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Cerrar si tocas fuera del menú
document.addEventListener("click", (e) => {
  const clickedInside =
    mobileBtn.contains(e.target) ||
    mainNav.contains(e.target) ||
    navRight.contains(e.target);

  if (!clickedInside) closeMenu();
});

// Cerrar al dar click en cualquier link del nav
[...mainNav.querySelectorAll("a"), ...navRight.querySelectorAll("a")].forEach((a) => {
  a.addEventListener("click", closeMenu);
});

// Cerrar con ESC (por si lo pruebas en desktop)
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMenu();
});
