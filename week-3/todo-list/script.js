function populateTodoList(todos) {
  const list = document.getElementById("todo-list");
  list.textContent = "";
  console.log(list);

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  todos.forEach((item) => {
    const listOfItems = document.createElement("li");
    list.appendChild(listOfItems);
    listOfItems.textContent = item.task;

    const span = document.createElement("span");
    listOfItems.appendChild(span);
    span.classList.add("badge", "bg-primary", "rounded-pill");

    const date = document.createElement("p");
    listOfItems.appendChild(date);
    date.textContent = item.date;

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = item.completed;
    checkBox.classList.add("todo-check");
    span.appendChild(checkBox);

    checkBox.addEventListener("click", () => {
      item.completed = checkBox.checked;
      checkBox.classList.toggle(checkBox.checked);
      listOfItems.classList.toggle("completed");
    });

    const todoTrash = document.createElement("i");
    todoTrash.classList.add("fa", "fa-trash");
    span.appendChild(todoTrash);

    todoTrash.addEventListener("click", () => {
      // list.removeChild(todoTrash);
      todos = todos.filter((todo) => todo !== item);
      populateTodoList(todos);
    });
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];

let todos = [];
populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
const dateInput = document.getElementById("todo-date");
const input = document.getElementById("todo-input");
const addButton = document.getElementById("submit-btn");
addButton.addEventListener("click", addNewTodo);

console.log(input);
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const pattern = /^([0-9])/; //This checks for numerical inputs
  if (input.value.length > 0 && !pattern.test(input.value)) {
    //this checks if the input is longer than Zero and doesn't contain numerical value.
    const newToDo = {
      task: input.value,
      completed: false,
      date: dateInput.value,
    };
    todos.push(newToDo);
    populateTodoList(todos);
  } else {
    alert("Not a valid input");
  }
  input.value = "";
  //  dateInput.value = "";
}

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).

function deleteAllCompletedTodos() {
  // Write your code here...
  const deleteTodos = todos.filter((items) => !items.completed);
  todos = deleteTodos; //the todos was reassigned here to avoid repopulation of the deleted list.
  populateTodoList(deleteTodos);
}
