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

let num = 0;
forwardBtn.addEventListener("click", function () {
  if (num === images.length - 1) {
    num = 0;
  } else {
    num++;
  }
  carouselImg.src = images[num];
  clearInterval(intervalId);
  clearInterval(intervalId2);
});

backwardBtn.addEventListener("click", function () {
  if (num === 0) {
    num == images.length - 1;
  } else {
    num--;
  }
  carouselImg.src = images[num];
  clearInterval(intervalId);
  clearInterval(intervalId2);
});

// creating Auto Forward button
let autoForwardButton = document.createElement("button");
autoForwardButton.setAttribute("id", "btn");

// Set the button text content
autoForwardButton.textContent = "Auto Forward";
carouselDiv.append(autoForwardButton);

let intervalId;
//add event listener for auto forward button
autoForwardButton.addEventListener("click", function () {
  intervalId = setInterval(function () {
    if (num === 0) {
      num++;
      carouselImg.src = images[num];
    } else {
      num++;
      carouselImg.src = images[num];
    }

    if (num === images.length - 1) {
      clearInterval(intervalId);
      num--;
    }
  }, 2000);
  clearInterval(intervalId2);
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
  clearInterval(intervalId);
  clearInterval(intervalId2);
});

//creating Auto Backward
let autoBackwardButton = document.createElement("button");
autoBackwardButton.setAttribute("id", "btn");

autoBackwardButton.textContent = "Auto Backward";
carouselDiv.append(autoBackwardButton);
//add event listener for Auto Backward button;
let intervalId2;
autoBackwardButton.addEventListener("click", function () {
  if (num === 0) {
    alert("you must begin with Forward or Auto-Forward Button!");
  }
  intervalId2 = setInterval(function () {
    if (num > 0) {
      num--;
      carouselImg.src = images[num];
    }
  }, 2000);
  clearInterval(intervalId);
});
