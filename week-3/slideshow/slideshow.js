const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "./assets/cute-cat-d.jpg",
  "./assets/cute-cat-e.webp",
  "./assets/cute-cat-f.jpg",
  "./assets/cute-cat-g.jpg",
  "./assets/cute-cat-h.webp",
  "./assets/cute-cat-i.jpg",
  "./assets/cute-cat-j.jpg",
  "./assets/cute-cat-k.jpg",
  "./assets/cute-cat-l.jpg",
  "./assets/cute-cat-m.webp",
];

// Write your code here
const backward = document.getElementById("backward-btn");
const forward = document.getElementById("forward-btn");
const imageCarousel = document.getElementById("carousel-img");
const autoBackward = document.getElementById("auto-back-btn");
const autoForward = document.getElementById("auto-forward-btn");
const stop = document.getElementById("stop-btn");
const inputTime = document.getElementById("inputTime");
imageCarousel.style.height = "30rem";
imageCarousel.style.width = "50rem";
let autoPlay; //This is created to allow the use of set interval...

let index = 0;

function displayImg(page) {
  imageCarousel.src = images[page];
}

backward.addEventListener("click", () => {
  if (index === 0) {
    index = images.length - 1;
    displayImg(index);
  } else {
    index--;
    displayImg(index);
  }
});

autoBackward.addEventListener("click", () => {
  autoPlay = setInterval(() => {
    if (index === 0) {
      index = images.length - 1;
      displayImg(index);
    } else {
      index--;
      displayImg(index);
    }
  }, inputTime.value * 1000);
});

stop.addEventListener("click", () => {
  clearInterval(autoPlay);
});

forward.addEventListener("click", () => {
  if (index === images.length - 1) {
    index = 0;
    displayImg(index);
  } else {
    index++;
    displayImg(index);
  }
});

autoForward.addEventListener("click", () => {
  autoPlay = setInterval(() => {
    if (index === images.length - 1) {
      index = 0;
      displayImg(index);
    } else {
      index++;
      displayImg(index);
    }
  }, inputTime.value * 1000);
});
