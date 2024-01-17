const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg",
];

// Write your code here

let index = 0;
const interval = 1000;
const carouselImage = document.getElementById("carousel-img");
const imageIndex = document.getElementById("img-index");

const forwardBtn = document.getElementById("forward-btn");
forwardBtn.addEventListener("click", function () {
  nextImage();
});

const backwardsBtn = document.getElementById("backward-btn");
backwardsBtn.addEventListener("click", function () {
    previousImage();
});

function setCarouselImage() {
  carouselImage.src = images[index];
  imageIndex.innerText = index;
}

function nextImage (){
    index++;
    if (index == images.length) {
      index = 0;
    }
    setCarouselImage();
}

function previousImage(){
  index--;
  if (index == -1) {
    index = images.length - 1;
  }
  setCarouselImage();
}

let forwardIntervalId;
const autoForwardBtn = document.getElementById("auto-forward-btn");
autoForwardBtn.addEventListener("click", function () {
    forwardIntervalId = setInterval(() => {
        nextImage();
    }, interval);
});

const stopBtn = document.getElementById("stop-btn");
stopBtn.addEventListener("click", function () {
   clearInterval(forwardIntervalId);
});