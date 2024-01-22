const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

// Write your code here
let currentIndex = 0;
const imgDisplay = document.getElementById("carousel-img");
const btnBack = document.getElementById("backward-btn");
const btnForward = document.getElementById("forward-btn");

function updateImage() {
  imgDisplay.src = images[currentIndex];
}

function goBack() {
  if (currentIndex > 0) {
    currentIndex--;
    updateImage();
  }
}

function goForward() {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updateImage();
  }
}

btnBack.addEventListener("click", goBack);
btnForward.addEventListener("click", goForward);
