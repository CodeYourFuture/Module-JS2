let list = document.getElementById("todo-list");

function populateTodoList(todos) {
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  for (const item of todos) {
    addItem(item.task);
  }
}

function addItem(task) {
  const item = document.createElement("li");
  item.innerText = task;

  const btnSpan = document.createElement("span");
  btnSpan.setAttribute("class", "badge bg-primary rounded-pill");

  const iCheck = document.createElement("i");
  iCheck.setAttribute("class", "fa fa-check");

  const iTrash = document.createElement("i");
  iTrash.setAttribute("class", "fa fa-trash");

  btnSpan.appendChild(iCheck);
  btnSpan.appendChild(iTrash);

  item.appendChild(btnSpan);

  list.appendChild(item);
}

document.getElementById("add-todo").addEventListener("click", function (event) {
  addNewTodo(event);
});

// <span class="badge bg-primary rounded-pill">
//   <i class="fa fa-check" aria-hidden="true"></i>
//   <i class="fa fa-trash" aria-hidden="true"></i>
// </span>

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  let newTodo = document.getElementById("todo-input").value;
  addItem(newTodo);
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...

  
}
