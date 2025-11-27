const mainImage = document.getElementById("mainStepImage");
const mainText = document.getElementById("mainStepText");
const mainLink = document.getElementById("mainStepLink");
const thumbs = document.querySelectorAll(".steps-thumbnails img");

let currentIndex = 0;

function setActive(index) {
  thumbs.forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });

  mainImage.src = thumbs[index].src;
  mainText.textContent = thumbs[index].dataset.text;
  mainLink.href = thumbs[index].dataset.link;

  currentIndex = index;
}

/* Click manual */
thumbs.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    setActive(index);
  });
});

/* Autoplay cada 6 segundos */
setInterval(() => {
  let next = (currentIndex + 1) % thumbs.length;
  setActive(next);
}, 6000);
