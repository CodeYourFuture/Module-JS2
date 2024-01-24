const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
    "./assets/cute-cat.jpg"
];


// Write your code here

const autoBackBtn = document.getElementById("auto-backward-btn");
const backBtn = document.getElementById("backward-btn");
const stopBtn = document.getElementById("stop-btn");
const fwrdBtn = document.getElementById("forward-btn");
const autoFwrdBtn = document.getElementById("auto-forward-btn");
const carouselImages = document.getElementById("carousel-img");
let currentIndex = 1;
let autoIntervalId;

function forward (){
    currentIndex = (currentIndex+1) % images.length;
    carouselImages.src = images[currentIndex];    
}

function backward (){
    currentIndex = (currentIndex+3) % images.length;
    carouselImages.src = images[currentIndex];    
}

backBtn.addEventListener("click", backward);
fwrdBtn.addEventListener("click", forward);
autoBackBtn.addEventListener("click", ()=>{
    autoIntervalId = setInterval(backward,2000);
});
autoFwrdBtn.addEventListener("click", ()=>{
    autoIntervalId = setInterval(forward,2000);
});
stopBtn.addEventListener("click", ()=>{
    clearInterval(autoIntervalId);
});