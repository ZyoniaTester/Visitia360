const btn = document.getElementById("hamburgerBtn");
const menu = document.getElementById("mobileMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
