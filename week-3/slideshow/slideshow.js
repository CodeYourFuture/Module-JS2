const images = [
    "./assets/cute-cat-a.png",
    "./assets/cute-cat-b.jpg",
    "./assets/cute-cat-c.jpg",
];

let currentIndex = 0;



 function displayImg(num){
    const image = document.getElementById("carousel-img");
    image.src = images[num];

 }


document.body.onload = adcElemento;

function adcElemento(){

    const newDiv = document.createElement("div");
    const newHOne = document.createElement("h1");
newDiv.appendChild(newHOne)
newHOne.innerText = "Gatinhos Fofinhos Para Meme"

const divNova = document.getElementById("carousel-img");
document.body.insertBefore(newDiv, divNova)
}


displayImg(currentIndex);

function nextImg(){

    if(currentIndex< images.length -1){
        currentIndex = currentIndex + 1;
        displayImg(currentIndex);
    }
}

function previousImg(){
    if(currentIndex > 0){
        currentIndex = currentIndex - 1;
        displayImg(currentIndex)
    }
}

const fBut = document.getElementById("forward-btn");
const ffBut = document.getElementById("backward-btn");

fBut.addEventListener("click", nextImg);
ffBut.addEventListener("click", previousImg);
