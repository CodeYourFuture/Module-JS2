const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

const img = document.querySelector('#carousel-img');
const forwardBtn = document.querySelector('#forward-btn');
const backwardBtn = document.querySelector('#backward-btn');
const autoBackBtn = document.querySelector('#auto-backward');
const autoForwardBtn = document.querySelector('#auto-forward');
const stopBtn = document.querySelector('#stop');
let currentImageIndex = 0;
let timeBackward;
let timeForward;
let delay;

function displayImages(num) {
    img.src = images[num];
}

function backward() {
    if (currentImageIndex === 0) {
        currentImageIndex = images.length - 1;
        displayImages(currentImageIndex);
    } else {
        currentImageIndex--;
        displayImages(currentImageIndex);
    }
}

function forward() {
    if (currentImageIndex === images.length - 1) {
        currentImageIndex = 0;
        displayImages(currentImageIndex);
    } else {
        currentImageIndex++;
        displayImages(currentImageIndex);
    }
}

stopBtn.addEventListener('click', () => {
    clearInterval(timeBackward);
    clearInterval(timeForward);
    enableAutoButtons();
})


backwardBtn.addEventListener('click', () => {
    backward();
})

forwardBtn.addEventListener('click', () => {
    forward();
})

autoBackBtn.addEventListener('click', () => {
    disableAutoButtons();
    delay = document.querySelector('#delay').value;
    if (delay === "") {
        delay = 2000;
    } 
    timeBackward = setInterval(backward(), delay);
})

autoForwardBtn.addEventListener('click', () => {
    disableAutoButtons()
    delay = document.querySelector('#delay').value;
    if (delay === "") {
        delay = 2000;
    }
    timeForward = setInterval(forward, delay);
})

function disableAutoButtons() {
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
}

function enableAutoButtons() {
    autoForwardBtn.disabled = false;
    autoBackBtn.disabled = false;
}
