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
let index = 0;
let timeBackward;
let timeForward;
let delay;

function displayImages(num) {
    img.src = images[num];
}

function backward() {
    if (index === 0) {
        index = images.length - 1;
        displayImages(index);
    } else {
        index--;
        displayImages(index);
    }
}

function forward() {
    if (index === images.length - 1) {
        index = 0;
        displayImages(index);
    } else {
        index++;
        displayImages(index);
    }
}

stopBtn.addEventListener('click', () => {
    clearInterval(timeBackward);
    clearInterval(timeForward);
    enableAutoButtons();
})

function autoBackward() {
    backward();
}

function autoForward() {
    forward();
}

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
        timeBackward = setInterval(autoBackward, delay);
    } else {
        timeBackward = setInterval(autoBackward, delay);
    }
})

autoForwardBtn.addEventListener('click', () => {
    disableAutoButtons()
    delay = document.querySelector('#delay').value;
    if (delay === "") {
        delay = 2000;
        timeForward = setInterval(autoForward, delay);
    } else {
        timeForward = setInterval(autoForward, delay);
    }
})

function disableAutoButtons() {
    autoForwardBtn.disabled = true;
    autoBackBtn.disabled = true;
}

function enableAutoButtons() {
    autoForwardBtn.disabled = false;
    autoBackBtn.disabled = false;
}
