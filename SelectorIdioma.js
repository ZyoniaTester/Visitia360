const langWrapper = document.querySelector(".lang-wrapper");
const langSelect = document.querySelector(".lang-select");
const selectedLang = document.querySelector(".selected-lang");
const dropdownItems = document.querySelectorAll(".lang-dropdown li");

langSelect.addEventListener("click", () => {
  langWrapper.classList.toggle("active");
});

dropdownItems.forEach((item) => {
  item.addEventListener("click", () => {
    selectedLang.textContent = item.dataset.lang;
    langWrapper.classList.remove("active");
    // Aquí puedes activar la traducción real después
    console.log("Idioma seleccionado:", item.dataset.lang);
  });
});

// Cerrar al hacer clic fuera
document.addEventListener("click", (e) => {
  if (!langWrapper.contains(e.target)) {
    langWrapper.classList.remove("active");
  }
});
