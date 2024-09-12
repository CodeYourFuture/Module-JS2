const images = [
  "./assets/penguin1.jpeg",
  "./assets/penguin2.jpeg",
  "./assets/penguin4.jpeg",
  "./assets/penguin5.jpeg",
  "./assets/penguin6.avif",
  "./assets/penguin7.jpeg",
  "./assets/penguin8.jpg",
  "./assets/penguin9.jpeg",
  "./assets/penguin10.jpeg",
  "./assets/penguin11.png",
  "./assets/penguin12.jpeg",
  "./assets/penguin13.jpeg",
  "./assets/penguin14.jpeg",
  "./assets/penguin15.webp",
  "./assets/penguin16.webp",
  "./assets/penguin17.jpeg",
  "./assets/penguin18.webp",
  "./assets/penguin19.jpeg",
  "./assets/penguin20.jpeg",
];

// Write your code here
const title = document.querySelector("#title");
title.innerText = "🐧 Penguins Slideshow 🐧"

const picDiv = document.getElementById("slideshow");
const image = document.createElement("img");
picDiv.appendChild(image);

let index = 0;
function displayImages() {
    console.log(index);
  image.src = images[index];
}
displayImages(index);

const btnDiv = document.getElementById("btn");
const autoPrevious = document.createElement("button");
btnDiv.appendChild(autoPrevious);
autoPrevious.innerText = "Auto Back";

const previousButton = document.createElement("button");
btnDiv.appendChild(previousButton);
previousButton.innerText = "Back";

const autoStop = document.createElement("button");
btnDiv.appendChild(autoStop);
autoStop.innerText = "Stop";

const nextButton = document.createElement("button");
btnDiv.appendChild(nextButton);
nextButton.innerText = "Forward";

const autoNext = document.createElement("button");
btnDiv.appendChild(autoNext);
autoNext.innerText = "Auto Forward";

function goBackward() {
  index = index - 1;
  if (index < 0) {
    index = images.length - 1;
  }
  displayImages(index);
}

function goForward() {
  index = index + 1;
  if (index > images.length - 1) {
    index = 0;
  }
  displayImages(index);
}

let autoPlay;

previousButton.addEventListener("click", goBackward);

nextButton.addEventListener("click", goForward);

autoPrevious.addEventListener("click", function () {
  autoPlay = setInterval(goBackward, 2000);
});

autoNext.addEventListener("click", function () {
  autoPlay = setInterval(goForward, 2000);
});

autoStop.addEventListener("click", function() {
    clearInterval(autoPlay);
});
