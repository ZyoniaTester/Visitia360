document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("visitia-contact-form");
  const successMsg = document.getElementById("form-success");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (response.ok) {
        successMsg.classList.remove("hidden");
        setTimeout(() => successMsg.classList.add("show"), 50);
        form.reset();
      } else {
        alert("Hubo un problema al enviar el formulario. Inténtalo más tarde.");
      }
    } catch (error) {
      alert("Error de conexión. Inténtalo más tarde.");
    }
  });
});
