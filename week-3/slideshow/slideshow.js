

let element_image = document.getElementById('image');
 let img_list = [
  "./assets/cute-cat-a.png",
  "./assets/cute-cat-b.jpg",
   "./assets/cute-cat-c.jpg",
   "./assets/cute-cat-d.png"
  ];
element_image.setAttribute("src", img_list[0]);

function add_carousel(){
  let element_imageI = document.getElementById('image');
  element_imageI.setAttribute("src", img_list.slice(-1)[0]);
}

function carousel(){
  if(img_list) {
    let element_imageJ = document.getElementsById('image');
    element_imageJ.setAttribute("src", img_list[0]);
  }else{
    let element_imageK = document.getElementById('image');
    element_imageK.setAttribute("src", img_list.slice(-1)[0])
  }
}

function add_image() {
  add_carousel();
  carousel();
}

document.getElementById('previous').addEventListener('click', (event) => {
    img_list.unshift(img_list.pop());
  add_image();

});

document.getElementById('next').addEventListener('click', (event) => {
img_list.push(img_list.shift());
  add_image();

});


const buttonClick = document.getElementById("autoBack");
const autoPlay = document.getElementById("status");

let autoBackEnabled = false;

setInterval(() => {
  if (autoBackEnabled) {
    img_list.unshift(img_list.pop());
      add_image();
  }
}, 5000);

buttonClick.addEventListener("click", function () {
  autoBackEnabled = !autoBackEnabled;
  if (autoBackEnabled) {
    autoPlay.textContent = "auto-Backword ON";
  } else {
    autoPlay.textContent = "";
  }
});

const forwordButton = document.getElementById("autoForward");

let autoForwardButton = false;
setInterval(() => {
  if (autoForwardButton) {
    img_list.push(img_list.shift());
      add_image();
  } 
}, 5000);

forwordButton.addEventListener("click", function () {
  autoForwardButton= !autoForwardButton;
  if (autoForwardButton) {
    autoPlay.textContent = "auto-Forword ON";
  } else {
    autoPlay.textContent = "";
  }
});

const stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stop);

function stop(){
  autoForwardButton = false;
  autoBackEnabled = false;
  autoPlay.textContent = "";
}

