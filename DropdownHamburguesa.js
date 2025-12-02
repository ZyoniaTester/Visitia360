const mobileBtn = document.getElementById("mobileMenuBtn");
const mainNav = document.getElementById("mainNav");
const navRight = document.getElementById("navRight");

mobileBtn.addEventListener("click", () => {
  mobileBtn.classList.toggle("active");
  mainNav.classList.toggle("active");
  navRight.classList.toggle("active");
});

/* DROPDOWNS PARA MOBILE */
document.querySelectorAll(".nav-item-dropdown > a").forEach((trigger) => {
  trigger.addEventListener("click", (e) => {
    if (window.innerWidth <= 820) {
      e.preventDefault();
      const parent = trigger.parentElement;
      parent.classList.toggle("open");
    }
  });
});
