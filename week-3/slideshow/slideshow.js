const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

const imageContainer = document.getElementById("carousel-img");
const forwardButton = document.getElementById("forward-btn");
const backwardButton = document.getElementById("backward-btn");

let actualImg = 0;
let intervalId

function disableAllButtons() {
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.id !== 'stop' ? button.disabled = true : button.disabled = false;
    });
}

function enableAllButtons() {
    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(button => {
        button.disabled = false;
    });
}

function handleBackward() {
    actualImg - 1 < 0 ? actualImg = images.length - 1 : actualImg--;
    imageContainer.src = images[actualImg];
}

function handleForward() {
    actualImg + 1 == images.length ? actualImg = 0 : actualImg++;
    imageContainer.src = images[actualImg];
}

function handleAutoBackward() {
    disableAllButtons()
    intervalId = setInterval(handleBackward, 2000);
}

function handleAutoForward() {
    disableAllButtons()
    intervalId = setInterval(handleForward, 2000);
}

function handleStop() {
    enableAllButtons()
    clearInterval(intervalId);
}


window.onload = function () {
    document.querySelector('#forward-btn').addEventListener('click', handleForward);
    document.querySelector('#backward-btn').addEventListener('click', handleBackward);
    document.querySelector('#auto-backward').addEventListener('click', handleAutoBackward);
    document.querySelector('#auto-forward').addEventListener('click', handleAutoForward);
    document.querySelector('#stop').addEventListener('click', handleStop);
}