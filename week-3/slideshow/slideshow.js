const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here

const forwardSlide = document.querySelector("#forward-btn");
const backwardSlide = document.querySelector("#backward-btn");
const imageSelector = document.querySelector("#carousel-img");

let num = 0;
imageSelector.style.width = "600px";
imageSelector.style.height = "400px";

forwardSlide.addEventListener("click", function () {
  num++;
  if (num === images.length) {
    num = 0;
  }
  imageSelector.src = images[num];
});

backwardSlide.addEventListener("click", function () {
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  imageSelector.src = images[num];
});
