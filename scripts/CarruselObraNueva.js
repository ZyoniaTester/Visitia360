let index = 0;
const imgs = document.querySelectorAll(".carousel-img");

setInterval(() => {
  imgs[index].classList.remove("active");
  index = (index + 1) % imgs.length;
  imgs[index].classList.add("active");
}, 6000);
