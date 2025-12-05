// Mostrar banner solo si no hay decisión previa
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.getElementById("cookie-banner");

  const decision = localStorage.getItem("visitiaCookies");

  if (!decision) {
    banner.classList.add("show");
  }

  document.getElementById("cookie-accept").addEventListener("click", () => {
    localStorage.setItem("visitiaCookies", "accepted");
    banner.classList.remove("show");
  });

  document.getElementById("cookie-reject").addEventListener("click", () => {
    localStorage.setItem("visitiaCookies", "rejected");
    banner.classList.remove("show");
  });
});
