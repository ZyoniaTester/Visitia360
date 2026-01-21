// ====== MODAL PDF (embed) ======
const pdfModal = document.getElementById("pdfModal");
const pdfEmbed = document.getElementById("pdfEmbed");
const pdfModalTitle = document.getElementById("pdfModalTitle");
const pdfOpenNewTab = document.getElementById("pdfOpenNewTab");
const pdfFallbackLink = document.getElementById("pdfFallbackLink");

let lastFocusedEl = null;

function openPdfModal({ src, title }) {
  lastFocusedEl = document.activeElement;

  pdfEmbed.src = src;
  pdfModalTitle.textContent = title || "Tutorial";
  pdfOpenNewTab.href = src;
  pdfFallbackLink.href = src;

  pdfModal.classList.add("is-open");
  pdfModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closePdfModal() {
  pdfEmbed.src = ""; // importante para "parar" carga y liberar memoria
  pdfModal.classList.remove("is-open");
  pdfModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";

  if (lastFocusedEl) lastFocusedEl.focus();
}

document.addEventListener("click", (e) => {
  const slide = e.target.closest(".tutorial-slide[data-pdf]");
  if (slide) {
    openPdfModal({
      src: slide.getAttribute("data-pdf"),
      title: slide.getAttribute("data-title") || "Tutorial",
    });
  }

  if (e.target.matches("[data-close-modal]")) {
    closePdfModal();
  }
});

// Cerrar con ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && pdfModal.classList.contains("is-open")) {
    closePdfModal();
  }
});


// ====== Flechas carrusel (opcional) ======
document.addEventListener("click", (e) => {
  const navBtn = e.target.closest("[data-carousel-nav]");
  if (!navBtn) return;

  const block = navBtn.closest(".tutorial-block");
  const carousel = block?.querySelector("[data-carousel]");
  if (!carousel) return;

  const step = Math.min(carousel.clientWidth * 0.85, 520);
  const dir = navBtn.getAttribute("data-carousel-nav");

  carousel.scrollBy({
    left: dir === "next" ? step : -step,
    behavior: "smooth",
  });
});
