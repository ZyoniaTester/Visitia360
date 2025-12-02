const mobileBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");
const navRight = document.getElementById("navRight");

mobileBtn.addEventListener("click", () => {
  mobileBtn.classList.toggle("active");
  mainNav.classList.toggle("active");
  navRight.classList.toggle("active");
});
