// function populateTodoList(todos) {
//   let list = document.getElementById("todo-list");
//   // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
// }

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];

//populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
// function addNewTodo(event) {
//   // The code below prevents the page from refreshing when we click the 'Add Todo' button.
//   event.preventDefault();
//   // Write your code here... and remember to reset the input field to be blank after creating a todo!
// }

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
//   // Write your code here...
// }
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
// Assuming you have a list element with id "myList"
var myList = document.getElementById("myList");

// Add a click event listener to the list
// deleteButton.addEventListener("click", function (e) {
//   deleteListItem(e);
// });

// Your deleteListItem function
// function deleteListItem(e) {
//   if (e.target.classList.contains("checked")) {
//     e.target.parentElement.remove();
//   } else {
//     alert("You must select a task");
//   }
// }

function addTask() {
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
showList();
// calling the function
