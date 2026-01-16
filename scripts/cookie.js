const cookieBanner = document.getElementById("cookie-banner");
const acceptBtn = document.getElementById("cookie-accept");
const rejectBtn = document.getElementById("cookie-reject");
const configBtn = document.getElementById("cookie-settings");

const settingsModal = document.getElementById("cookie-settings-modal");
const settingsClose = document.querySelector(".cookie-settings-close");
const saveSettings = document.getElementById("cookie-save-settings");

/* ======================
   HELPERS
====================== */
function hideCookieBanner() {
  cookieBanner.classList.remove("show");
}

/* ======================
   MOSTRAR BANNER
====================== */
if (!localStorage.getItem("cookieConsent")) {
  setTimeout(() => {
    cookieBanner.classList.add("show");
  }, 800);
}

/* ======================
   ACCIONES PRINCIPALES
====================== */

// Aceptar todas
acceptBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "all");
  hideCookieBanner();
});

// Rechazar todas
rejectBtn.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "none");
  hideCookieBanner();
});

// Abrir configuración
configBtn.addEventListener("click", () => {
  settingsModal.style.display = "flex";
});

// Cerrar configuración (X)
settingsClose.addEventListener("click", () => {
  settingsModal.style.display = "none";
});

// Cerrar clic fuera
settingsModal.addEventListener("click", (e) => {
  if (e.target === settingsModal) {
    settingsModal.style.display = "none";
  }
});

// Guardar preferencias
saveSettings.addEventListener("click", () => {
  const prefs = {
    necessary: true, // siempre true
    preferences: document.getElementById("cookies-preferences").checked,
    analytics: document.getElementById("cookies-analytics").checked,
    marketing: document.getElementById("cookies-marketing").checked
  };

  localStorage.setItem("cookieConsent", JSON.stringify(prefs));
  settingsModal.style.display = "none";
  hideCookieBanner();
});
