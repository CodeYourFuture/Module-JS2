const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
];

let currentPhotoIndex = 0;

const image = document.getElementById("carousel-img");

const imgContainer = document.createElement("div");
imgContainer.setAttribute("id", "img-container");

image.before(imgContainer);
imgContainer.appendChild(image);

const btnContainer = document.createElement("div");
btnContainer.classList.add("btn-container");

const backwardBtn = document.getElementById("backward-btn");
const forwardBtn = document.getElementById("forward-btn");

const stopBtn = document.getElementById("stop-btn");

const autoBackwardBtn = document.getElementById("auto-backward-btn");
const autoForwardBtn = document.getElementById("auto-forward-btn");

btnContainer.append(
  autoBackwardBtn,
  backwardBtn,
  stopBtn,
  forwardBtn,
  autoForwardBtn
);

let autoPlayBackward;
let autoPlayForward;

// Write your code here

function generatePhoto() {
  image.setAttribute("src", images[currentPhotoIndex]);
  if (currentPhotoIndex === 0) {
    document.getElementById("img0").style.backgroundColor = "grey";
    document.getElementById("img1").style.backgroundColor = "black";
    document.getElementById("img2").style.backgroundColor = "black";
  } else if (currentPhotoIndex === 1) {
    document.getElementById("img0").style.backgroundColor = "black";
    document.getElementById("img1").style.backgroundColor = "grey";
    document.getElementById("img2").style.backgroundColor = "black";
  } else if (currentPhotoIndex === 2) {
    document.getElementById("img0").style.backgroundColor = "black";
    document.getElementById("img1").style.backgroundColor = "black";
    document.getElementById("img2").style.backgroundColor = "grey";
  }
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

autoBackwardBtn.addEventListener("click", () => {
  autoPlayBackward = setInterval(() => {
    previousPhoto();
  }, 1000);
  clearInterval(autoPlayForward);
});

autoForwardBtn.addEventListener("click", () => {
  autoPlayForward = setInterval(() => {
    nextPhoto();
  }, 1000);
  clearInterval(autoPlayBackward);
});

stopBtn.addEventListener("click", () => {
  clearInterval(autoPlayBackward);
  clearInterval(autoPlayForward);
});

window.onload = generatePhoto;

// extra img navigate buttons

const navContainer = document.createElement("div");
navContainer.classList.add("nav");

for (let i = 0; i < images.length; i++) {
  const imgBtn = document.createElement("button");
  imgBtn.classList.add(`img${i}`);
  imgBtn.setAttribute("id", `img${i}`);
  imgBtn.classList.add("navBtn");
  navContainer.appendChild(imgBtn);
}

imgContainer.after(navContainer);
navContainer.after(btnContainer);

navContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.classList.contains("img0")) {
    currentPhotoIndex = 0;
  } else if (target.classList.contains("img1")) {
    currentPhotoIndex = 1;
  } else if (target.classList.contains("img2")) {
    currentPhotoIndex = 2;
  }

  generatePhoto();
});
