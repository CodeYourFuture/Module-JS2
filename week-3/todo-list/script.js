function populateTodoList() {
  list.innerHTML = "";

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  for (const todo of todos) {
    const toDoListElement = document.createElement("li");
    toDoListElement.innerText = todo.task;
    toDoListElement.classList.add(todo.task.replaceAll(" ", "-"));

    if (todo.completed) {
      toDoListElement.style.textDecoration = "line-through";
    }

    const doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";

    toDoListElement.appendChild(doneBtn);
    toDoListElement.appendChild(deleteBtn);
    list.appendChild(toDoListElement);
  }
}

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!

  const toDoInput = document.querySelector("input");
  todos.push({ task: toDoInput.value, completed: false });

  toDoInput.value = "";

  populateTodoList();
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...

  todos = todos.filter((element) => !element.completed);

  populateTodoList();
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

const list = document.createElement("ul");
document.body.appendChild(list);

const addBtn = document.querySelector("button");
const deleteAllBtn = document.getElementById("remove-all-completed");

addBtn.addEventListener("click", addNewTodo);

deleteAllBtn.addEventListener("click", deleteAllCompletedTodos);

list.addEventListener("click", (event) => {
  const target = event.target;
  for (const todo of todos) {
    if (todo.task.replaceAll(" ", "-") === target.parentNode.className)
      if (target.innerText === "Done") {
        todo.completed = true;
        target.innerText = "Undone";
      } else if (target.innerText === "Undone") {
        todo.completed = false;
        target.innerText = "Done";
      } else if (target.innerText === "Delete") {
        todos.splice(todos.indexOf(todo), 1);
      }
  }
  populateTodoList();
});

window.onload = populateTodoList;
