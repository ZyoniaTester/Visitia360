(function () {
  const langWrapper = document.getElementById("langSwitcher") || document.querySelector(".lang-wrapper");
  const langSelect  = document.getElementById("langCurrent")  || document.querySelector(".lang-select");
  if (!langWrapper || !langSelect) return;

  const dropdownItems = langWrapper.querySelectorAll(".lang-dropdown li");

  // ====== Detectar idioma actual y pintar "ES / EN" ======
  const path = window.location.pathname;      // ej: /pages/ES/ObraNueva.html
  const file = path.split("/").pop() || "";   // ObraNueva.html
  const isEN = file.startsWith("en-") || path.includes("/EN/");

  // Cambia el texto visible sin romper el <span class="chevron">
  // (mantiene el primer nodo de texto dentro de .lang-select)
  if (langSelect.firstChild && langSelect.firstChild.nodeType === Node.TEXT_NODE) {
    langSelect.firstChild.nodeValue = (isEN ? "EN " : "ES ");
  } else {
    // fallback si el HTML cambia
    langSelect.insertAdjacentText("afterbegin", (isEN ? "EN " : "ES "));
  }

  // ====== Abrir/Cerrar dropdown ======
  langSelect.addEventListener("click", (e) => {
    e.stopPropagation();
    langWrapper.classList.toggle("active");
  });

  // Cerrar al hacer clic fuera
  document.addEventListener("click", (e) => {
    if (!langWrapper.contains(e.target)) langWrapper.classList.remove("active");
  });

  // ====== Navegación a equivalente EN/ES ======
  function toOtherLang(targetLang) {
    // HOME
    if (path === "/" || path.endsWith("/index.html")) {
      window.location.href = (targetLang === "EN")
        ? "/pages/EN/en-index.html"
        : "/index.html";
      return;
    }

    // Dentro de /pages/ES/*
    if (path.includes("/pages/ES/")) {
      const enFile = file.startsWith("en-") ? file : `en-${file}`;
      window.location.href = (targetLang === "EN")
        ? `/pages/EN/${enFile}`
        : `/pages/ES/${file}`;
      return;
    }

    // Dentro de /pages/EN/*
    if (path.includes("/pages/EN/")) {
      const esFile = file.startsWith("en-") ? file.replace(/^en-/, "") : file;
      if (targetLang === "EN") {
        window.location.href = `/pages/EN/${file}`;
      } else {
        window.location.href = (esFile === "index.html")
          ? "/index.html"
          : `/pages/ES/${esFile}`;
      }
      return;
    }

    // Fallback raro
    window.location.href = (targetLang === "EN")
      ? "/pages/EN/en-index.html"
      : "/index.html";
  }

  dropdownItems.forEach((li) => {
    li.addEventListener("click", (e) => {
      e.stopPropagation();
      const target = li.getAttribute("data-lang") || li.textContent.trim();
      toOtherLang(target);
      langWrapper.classList.remove("active");
    });
  });
})();
