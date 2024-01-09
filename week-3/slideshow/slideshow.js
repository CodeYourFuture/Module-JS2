const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

const imageContainer = document.getElementById("carousel-img");
const forwardButton = document.getElementById("forward-btn");
const backwardButton = document.getElementById("backward-btn");

let actualImg = 0;

function handleBackward() {
    actualImg - 1 < 0 ? actualImg = images.length - 1 : actualImg--;
    imageContainer.src = images[actualImg];
}

function handleForward() {
    actualImg + 1 == images.length ? actualImg = 0 : actualImg++;
    imageContainer.src = images[actualImg];
}


window.onload = function () {
    document.querySelector('#forward-btn').addEventListener('click', handleForward);
    document.querySelector('#backward-btn').addEventListener('click', handleBackward);
}