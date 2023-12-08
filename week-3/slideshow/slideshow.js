const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");
const carouselImg = document.querySelector("#carousel-img");

let num = 0;
forwardBtn.addEventListener("click", function () {
  if (num === images.length - 1) {
    num = 0;
  } else {
    num++;
  }
  carouselImg.src = images[num];
});

backwardBtn.addEventListener("click", function () {
  if (num === 0) {
    num == images.length - 1;
  } else {
    num--;
  }
  carouselImg.src = images[num];
});
