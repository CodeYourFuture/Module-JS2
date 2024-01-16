
let img_list;

// Describe this function...

function add_image() {
  add_carousel();
  carousel();
}

// Describe this function...
function add_carousel() {
    let element_imageI = document.getElementById('image');
    element_imageI.setAttribute("src", img_list.slice(-1)[0]);
 
}

// Describe this function...
function carousel() {
  if (img_list) {
    let element_imageJ = document.getElementById('image');
    element_imageJ.setAttribute("src", img_list[0]);
  } else {
    let element_imageK = document.getElementById('image');
    element_imageK.setAttribute("src", img_list.slice(-1)[0]);
  }
}


let element_image = document.getElementById('image');
 img_list = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
   "./assets/cute-cat-c.jpg",
   "./assets/cute-cat-d.png"
  ];
element_image.setAttribute("src", img_list[0]);


document.getElementById('previous').addEventListener('click', (event) => {
    img_list.unshift(img_list.pop());
  add_image();

});

document.getElementById('next').addEventListener('click', (event) => {
img_list.push(img_list.shift());
  add_image();

});

let autoBackEnabled = false;

setInterval(() => {
  if (autoBackEnabled) {
    img_list.unshift(img_list.pop());
      add_image();
     console.log("On");
  } else {
    console.log("Off");
  }
}, 5000);

// function getButtionFeature(){
  const buttonClick = document.getElementById("autoBack");
  const autoPlay = document.getElementById("status");
buttonClick.addEventListener("click", function () {
const autoPlay = document.getElementById("status");
  autoBackEnabled = !autoBackEnabled;
  if (autoBackEnabled) {
    autoPlay.textContent = "auto-Backword ON";
  } else {
    autoPlay.textContent = "";
  }
});

// let autoForwardButton = false;
setInterval(() => {
  if (autoForwardButton) {
    img_list.push(img_list.shift());
      add_image();
     console.log("On");
  } else {
    console.log("Off");
  }
}, 5000);

const forwordButton = document.getElementById("autoForward");
let autoForwardButton = false;

forwordButton.addEventListener("click", function () {
  autoForwardButton= !autoForwardButton;
  if (autoForwardButton) {
    autoPlay.textContent = "auto-Forword ON";
  } else {
    autoPlay.textContent = "";
  }
});

function stop(){
  autoForwardButton = false;
  autoBackEnabled = false;
  autoPlay.textContent = "";
}
const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stop);
