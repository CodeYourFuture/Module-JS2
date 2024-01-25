const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here
const autoBackwardBtn = document.getElementById("auto-backward-btn");
const backwardBtn = document.getElementById("backward-btn");
const stopBtn = document.getElementById("stop-btn");
const forwardBtn = document.getElementById("forward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");
const carouselImages = document.getElementById("carousel-img");

let currentIndex = 1;
let autoIntervalID;

function backward() {
  currentIndex = (currentIndex - 1) % images.length;
  carouselImages.src = images[currentIndex];
}

function forward() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImages.src = images[currentIndex];
}

backwardBtn.addEventListener("click", backward);
forwardBtn.addEventListener("click", forward);
autoBackwardBtn.addEventListener("click", () => {
    autoIntervalID = setInterval(backward, 2500);
});
autoForwardBtn.addEventListener("click", () => {
    autoIntervalID = setInterval(forward, 2500);
});
stopBtn.addEventListener("click", () => {
    clearInterval(autoIntervalID);
});