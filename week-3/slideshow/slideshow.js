const images = [
  "./assets/penguin1.jpeg",
  "./assets/penguin2.jpeg",
  "./assets/penguin4.jpeg",
  "./assets/penguin5.jpeg",
  "./assets/penguin6.avif",
  "./assets/penguin7.jpeg",
];


// Write your code here
const picDiv = document.getElementById("slideshow");
const image = document.createElement("img");
picDiv.appendChild(image);

let index = 0;
function displayImages() {
    image.src = images[index];
}
displayImages(index);


const nextButton = document.getElementById("forward-btn");
const previousButton = document.getElementById("backward-btn");

nextButton.addEventListener("click", function() {
    index = index + 1;
    displayImages(index);
});

previousButton.addEventListener("click", function () {
  index = index - 1;
  displayImages(index);
});
