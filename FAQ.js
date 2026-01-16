document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-question");
  const answer = item.querySelector(".faq-answer");

  btn.addEventListener("click", () => {
    const open = answer.classList.contains("open");

    document
      .querySelectorAll(".faq-answer")
      .forEach((a) => a.classList.remove("open"));
    document
      .querySelectorAll(".faq-item")
      .forEach((i) => i.classList.remove("active"));

    if (!open) {
      answer.classList.add("open");
      item.classList.add("active");
    }
  });
});
