const images = [
  "https://i.pinimg.com/736x/1c/fb/4c/1cfb4c52eef989b843109877ff5f1047.jpg",
  "https://i.ibb.co/XDFkXMx/spiderman-colgado.png",
  "https://pyxis.nymag.com/v1/imgs/fae/425/58c79341af156913d20677dcf16cbe05fe-lede-.2x.rhorizontal.w710.jpg",
  "https://cdn.marvel.com/content/1x/x23deadlyregenesis2023001_copy.jpg",
  "https://i.pinimg.com/736x/c2/4a/de/c24ade8058954e15f258fd50c31c4b18.jpg",
];

// Write your code here

const forwardSlide = document.querySelector("#forward-btn");
const backwardSlide = document.querySelector("#backward-btn");
const imageSelector = document.querySelector("#carousel-img");
const stopBtn = document.querySelector("#stop-btn");
const autoBackBtn = document.querySelector("#auto-back-btn");
const autoForwardBtn = document.querySelector("#auto-forward-btn");

let num = 0;
imageSelector.style.width = "600px";
imageSelector.style.height = "600px";

forwardSlide.addEventListener("click", function () {
  num++;
  if (num === images.length) {
    num = 0;
  }
  imageSelector.src = images[num];
});

let autoSlideShow;

autoForwardBtn.addEventListener("click", function () {
  autoSlideShow = setInterval(() => {
    num++;
    if (num === images.length) {
      num = 0;
    }
    imageSelector.src = images[num];
  }, 2000);
});

autoBackBtn.addEventListener("click", function () {
  autoSlideShow = setInterval(() => {
    num--;
    if (num < 0) {
      num = images.length - 1;
    }
    imageSelector.src = images[num];
  }, 2000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(autoSlideShow);
});

backwardSlide.addEventListener("click", function () {
  num--;
  if (num < 0) {
    num = images.length - 1;
  }
  imageSelector.src = images[num];
});
