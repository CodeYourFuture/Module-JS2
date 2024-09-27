const webpageDiv = document.getElementById("webpage");
const controlDiv = document.getElementById("controls");
const input = document.getElementById("textInput");
const addButton = document.getElementById("addButton");
const tagName = document.getElementById("tagName");
// const element = document.createElement(tagName.value);


addButton.addEventListener("click", () => {
//   console.log(tagName.value);
//   console.log(input.value);
  const element = document.createElement(tagName.value);
  element.innerText = input.value;
  webpageDiv.appendChild(element);

  element.addEventListener("click", () => {
    console.log(element);
    input.value = element.innerText;
    addButton.innerText = "Edit"

    if (addButton.innerText === "Edit") {
      addButton.addEventListener("click", () => {
        element.innerText = input.value;
      });
    }
  });
  
});


