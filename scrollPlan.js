function scrollToPlan(id) {
  const section = document.getElementById(id);
  if (!section) return;

  const offset = 120; // altura del header fijo
  const y = section.getBoundingClientRect().top + window.pageYOffset - offset;

  window.scrollTo({
    top: y,
    behavior: "smooth",
  });
}
