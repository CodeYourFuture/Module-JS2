const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg",
];

// Write your code here

let index = 0;
const carouselImage = document.getElementById("carousel-img");
const imageIndex = document.getElementById("img-index");

const forwardBtn = document.getElementById("forward-btn");
forwardBtn.addEventListener("click", function () {
  index++;
  if (index == images.length) {
    index = 0;
  }
  setCarouselImage();
});

const backwardsBtn = document.getElementById("backward-btn");
backwardsBtn.addEventListener("click", function () {
  index--;
  if (index == -1) {
    index = images.length - 1;
  }
  setCarouselImage();
});

function setCarouselImage() {
  carouselImage.src = images[index];
  imageIndex.innerText = index;
}
