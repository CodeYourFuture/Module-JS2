const images = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
  "./assets/cute-cat-c.jpg",
  "https://t4.ftcdn.net/jpg/02/66/72/41/360_F_266724172_Iy8gdKgMa7XmrhYYxLCxyhx6J7070Pr8.jpg",
  "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-mediumSquareAt3X-v2.jpg",
  "https://images.wsj.net/im-605354?width=1280&size=1.33333333",
  "https://static.wixstatic.com/media/7335d9_0c83c88a863d45c99ef0f8a72e2d483f~mv2.jpeg/v1/fill/w_640,h_760,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7335d9_0c83c88a863d45c99ef0f8a72e2d483f~mv2.jpeg",
  "https://hips.hearstapps.com/hmg-prod/images/cat-puns-64ef515f6036a.jpg?crop=1xw:0.8423586572438162xh;center,top",
  "https://image.petmd.com/files/styles/978x550/public/2023-06/flehmen-response-cat.jpg",
];

// Write your code here
const carouselDiv = document.querySelector(".btn-wrapper");
const forwardBtn = document.querySelector("#forward-btn");
const backwardBtn = document.querySelector("#backward-btn");
const carouselImg = document.querySelector("#carousel-img");

let currentIndex = 0;
forwardBtn.addEventListener("click", function () {
  if (currentIndex === images.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  carouselImg.src = images[currentIndex];
  clearInterval(autoForwardInterval);
  clearInterval(autoBackwardInterval);
});

backwardBtn.addEventListener("click", function () {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
  }
  carouselImg.src = images[currentIndex];
  clearInterval(autoForwardInterval);
  clearInterval(autoBackwardInterval);
});

// creating Auto Forward button
let autoForwardButton = document.createElement("button");
autoForwardButton.setAttribute("id", "btn");

// Set the button text content
autoForwardButton.textContent = "Auto Forward";
carouselDiv.append(autoForwardButton);

let autoForwardInterval;
//add event listener for auto forward button
autoForwardButton.addEventListener("click", function () {
  autoForwardInterval = setInterval(function () {
    if (currentIndex === 0) {
      currentIndex++;
      carouselImg.src = images[currentIndex];
    } else {
      currentIndex++;
      carouselImg.src = images[currentIndex];
    }

    if (currentIndex === images.length - 1) {
      clearInterval(autoForwardInterval);
      currentIndex--;
    }
  }, 2000);
  clearInterval(autoBackwardInterval);
});

// Append the button to the body or another HTML element

// create stope button
let buttonStop = document.createElement("button");
buttonStop.setAttribute("id", "btn");
// Set the button text content
buttonStop.textContent = "Stop";
carouselDiv.append(buttonStop);

//add event listener for stop button
buttonStop.addEventListener("click", function () {
  clearInterval(autoForwardInterval);
  clearInterval(autoBackwardInterval);
});

//creating Auto Backward
let autoBackwardButton = document.createElement("button");
autoBackwardButton.setAttribute("id", "btn");

autoBackwardButton.textContent = "Auto Backward";
carouselDiv.append(autoBackwardButton);
//add event listener for Auto Backward button;
let autoBackwardInterval;
autoBackwardButton.addEventListener("click", function () {
  if (currentIndex === 0) {
    currentIndex = images.length - 1;
  } else {
    currentIndex--;
    carouselImg.src = images[currentIndex];
  }

  autoBackwardInterval = setInterval(function () {
    if (currentIndex > 0) {
      currentIndex--;
      carouselImg.src = images[currentIndex];
    }
  }, 2000);
  clearInterval(autoForwardInterval);
});
