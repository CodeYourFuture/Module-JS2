const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentPhotoIndex = 1;

const image = document.getElementById("carousel-img");

const backwardBtn = document.getElementById("backward-btn");
const forwardBtn = document.getElementById("forward-btn");

// Write your code here

function generatePhoto() {
  image.setAttribute("src", images[currentPhotoIndex]);
}

function nextPhoto() {
  ++currentPhotoIndex;
  if (currentPhotoIndex === 3) {
    currentPhotoIndex = 0;
  }
  generatePhoto();
}

function previousPhoto() {
  --currentPhotoIndex;
  if (currentPhotoIndex === -1) {
    currentPhotoIndex = 2;
  }
  generatePhoto();
}

backwardBtn.addEventListener("click", previousPhoto);
forwardBtn.addEventListener("click", nextPhoto);

window.onload = generatePhoto;
