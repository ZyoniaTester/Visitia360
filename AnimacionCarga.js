// ScrollReveal.js
document.addEventListener("DOMContentLoaded", () => {
  const revealElements = document.querySelectorAll("[data-reveal]");

  if (!("IntersectionObserver" in window)) {
    // Fallback: si no hay soporte, mostramos todo
    revealElements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          el.classList.add("is-visible");
          observerInstance.unobserve(el);
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((el, index) => {
    // Delay individual si existe atributo, si no, se hace un stagger suave
    const customDelay = el.getAttribute("data-reveal-delay");
    const delay = customDelay ? parseInt(customDelay, 10) : index * 35;
    el.style.transitionDelay = `${delay}ms`;

    observer.observe(el);
  });
});
