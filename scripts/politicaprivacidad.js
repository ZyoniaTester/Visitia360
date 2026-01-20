const modal = document.getElementById("privacy-modal");
const closeBtn = document.querySelector(".privacy-close");

// Selecciona elementos tanto por ID como por clase
const openBtns = [
  ...document.querySelectorAll("#openPrivacy"),
  ...document.querySelectorAll(".openPrivacy")
];

// Abrir modal desde cualquier botón/enlace
openBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // bloquea scroll
  });
});

// Cerrar con botón X
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
});

// Cerrar clic afuera
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});
