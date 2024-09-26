const images = [
  "./assets/cute-cat-a.jpg",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg",
  "./assets/cute-cat-e.jpg",
  "./assets/cute-cat-f.jpg",
];

const forwardSlide = document.querySelector("#forward-btn");
const backwardSlide = document.querySelector("#backward-btn");
const imageSelector = document.querySelector("#carousel-img");
const stopBtn = document.querySelector("#stop-btn");
const autoBackBtn = document.querySelector("#auto-back-btn");
const autoForwardBtn = document.querySelector("#auto-forward-btn");

let num = 0;
imageSelector.style.width = "600px";
imageSelector.style.height = "400px"; // Adjusted height for better proportions

forwardSlide.addEventListener("click", function () {
num++;
if (num === images.length) {
  num = 0;
}
imageSelector.src = images[num];
});

let autoSlideShow;

autoForwardBtn.addEventListener("click", function () {
autoSlideShow = setInterval(() => {
  num++;
  if (num === images.length) {
    num = 0;
  }
  imageSelector.src = images[num];
}, 2000);
});

autoBackBtn.addEventListener("click", function () {
autoSlideShow = setInterval(() => {
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  imageSelector.src = images[num];
}, 2000);
});

stopBtn.addEventListener("click", function () {
clearInterval(autoSlideShow);
});

backwardSlide.addEventListener("click", function () {
num--;
if (num < 0) {
  num = images.length - 1;
}
imageSelector.src = images[num];
});
