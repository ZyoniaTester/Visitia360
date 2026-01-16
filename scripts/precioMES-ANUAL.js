const toggle = document.getElementById("billingToggle");
const options = toggle.querySelectorAll(".billing-option");
const prices = document.querySelectorAll(".plan-price");

toggle.addEventListener("click", () => {
  const active = toggle.querySelector(".billing-option.active");
  const next = active.nextElementSibling || options[0];

  options.forEach(o => o.classList.remove("active"));
  next.classList.add("active");

  const billing = next.dataset.billing;

  prices.forEach(price => {
    price.textContent = price.dataset[billing];
  });
});
