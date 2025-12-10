const modal = document.getElementById("privacy-modal");
const openBtn = document.querySelector(
  ".footer-col:nth-child(3) .footer-title"
);
const closeBtn = document.querySelector(".privacy-close");

// Abrir modal
openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // bloquea scroll
});

// Cerrar con botón
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
