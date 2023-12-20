const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function populateTodoList() {
  if (inputBox.value === "") {
    alert("You must write a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "🗑";
    // cross code \u00d7
    li.appendChild(span);
  }
  inputBox.value = "";
  // after type in input it should  kep empty the input filed
  saveData();
}

// writing test for click function
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      //to check if the tag name of a target element is "LI" (list item)
      e.target.classList.toggle("checked");
      // we call the toggle function to toggle if the chec
      saveData();
      
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// we save our data in the local storage through saveData function
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
// to display data we write localStorage.getItem("data")

// display the data whenever we open or refresh the browser

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}
//showList();
// calling the function

function deleteList() {
  // Get the reference to the ul element
  var list = document.querySelector(".checked");

  // Check if the ul element exists
  if (list) {
    // Remove the ul element from its parent
    list.parentNode.removeChild(list);
  } else {
    console.log("UL element not found");
  }
}
