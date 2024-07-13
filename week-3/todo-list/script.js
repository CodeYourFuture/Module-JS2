function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.forEach((element) => {
    const listing = document.createElement("li");
    const spann = document.createElement("span");
    spann.className = "badge bg-primary rounded-pill";
    const add = document.createElement("i");
    const del = document.createElement("i");
    add.className = "fa fa-check";
    add.setAttribute("aria-hidden", "true");
    del.className = "fa fa-trash";
    del.setAttribute("aria-hidden", "true");
    spann.appendChild(add);
    spann.appendChild(del);
    listing.appendChild(spann);
    listing.textContent = element.task;
    list.appendChild(listing);
  });
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  const inputTodo = document.querySelector("input");
  const buttonTodo = document.querySelector("button");
  buttonTodo.addEventListener("click", (event) => {
    event.preventDefault();
    const newList = document.createElement("li");
    let list = document.getElementById("todo-list");
    newList.textContent = inputTodo.value;
    inputTodo.value = "";
    list.appendChild(newList);
  });

  // The code below prevents the page from refreshing when we click the 'Add Todo' button.

  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}
addNewTodo();
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}
