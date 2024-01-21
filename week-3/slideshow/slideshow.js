const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];


// Write your code here

const forwbutton = document.getElementById("backward-btn");
const backwbutton = document.getElementById("forward-btn");
const imgcontent = document.getElementById("carousel-img");
const autoForward = document.getElementById("auto-forward-btn");
const autobackward = document.getElementById("auto-backward-btn");
const autoStop = document.getElementById("stop");
let autoIntervalId;
let currentIndex = 0;

function forwarding(){
    currentIndex = (currentIndex+1 )%images.length;
    imgcontent.src = images[currentIndex];
};

function backWarding(){
    currentIndex = (currentIndex   + 2) % images.length;
    imgcontent.src = images[currentIndex];
};

forwbutton.addEventListener("click", forwarding);

backwbutton.addEventListener("click", backWarding);

autoForward.addEventListener("click", ()=> {
    autoIntervalId = setInterval(forwarding,2000);
     });

autobackward.addEventListener("click", ()=> {
    autoIntervalId = setInterval(backWarding,2000);
     });
        
autoStop.addEventListener("click",()=>{
    clearInterval(autoIntervalId);
    });
    
