// slideshow.js

const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;
let intervalId;

const imageElement = document.getElementById("carousel-img");
const forwardButton = document.getElementById("forward-btn");
const backwardButton = document.getElementById("backward-btn");
const autoForwardButton = document.getElementById("auto-forward");
const autoBackwardButton = document.getElementById("auto-backward");
const stopButton = document.getElementById("stop");
const imgDiv = document.querySelector(".slider");

//added backward and forward point btns- created div for them
const pointDiv = document.createElement("div");
pointDiv.setAttribute("id", "pointDiv");
imgDiv.after(pointDiv);

const forwardPoint = document.createElement("button");
forwardPoint.setAttribute("id", "forwardPoint");
forwardPoint.innerText = ">";
pointDiv.append(forwardPoint);

const backwardPoint = document.createElement("button");
backwardPoint.setAttribute("id", "backwardPoint");
backwardPoint.innerText = "<";
pointDiv.prepend(backwardPoint);

//...........

function updateImage() {
  imageElement.src = images[currentIndex];
}

function moveForward() {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}

function moveBackward() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
}

function startAutoForward() {
  intervalId = setInterval(moveForward, 2000);
  autoForwardButton.disabled = true;
  autoBackwardButton.disabled = true;
}

function startAutoBackward() {
  intervalId = setInterval(moveBackward, 2000);
  autoForwardButton.disabled = true;
  autoBackwardButton.disabled = true;
}

function stopAuto() {
  clearInterval(intervalId);
  autoForwardButton.disabled = false;
  autoBackwardButton.disabled = false;
}

const btns = document.getElementById("btns");
btns.addEventListener("click", function changeImg(event) {
  const target = event.target;
  if (target.id === "auto-backward") {
    startAutoForward();
  } else if (target.id === "forward-btn") {
    moveForward();
  } else if (target.id === "stop") {
    stopAuto();
  } else if (target.id === "backward-btn") {
    moveBackward();
  } else if (target.id === "auto-forward") {
    startAutoForward();
  }
});

backwardPoint.addEventListener("click", moveBackward);
forwardPoint.addEventListener("click", moveForward);

/* forwardButton.addEventListener("click", moveForward);
  backwardButton.addEventListener("click", moveBackward);
  autoForwardButton.addEventListener("click", startAutoForward);
  autoBackwardButton.addEventListener("click", startAutoBackward);
  stopButton.addEventListener("click", stopAuto); */

// Initial image display
window.onload = updateImage;
