function populateTodoList() {
  list.innerHTML = "";

  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  for (const todo of todos) {
    const toDoListElement = document.createElement("li");
    toDoListElement.innerText = todo.task;
    toDoListElement.classList.add(todo.task.replaceAll(" ", "-"));

    const doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";
    doneBtn.classList.add("todo-btn");
    doneBtn.classList.add("done-btn");
    doneBtn.classList.add("right-gap");

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.classList.add("todo-btn");
    deleteBtn.classList.add("delete-btn");

    const span = document.createElement("span");

    if (todo.completed) {
      toDoListElement.style.textDecoration = "line-through";
      toDoListElement.style.listStyleType = "disc";
      doneBtn.innerText = "Undone";
    }

    span.appendChild(doneBtn);
    span.appendChild(deleteBtn);
    toDoListElement.appendChild(span);
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
list.setAttribute("id", "todo-list");
document.body.appendChild(list);

const addBtn = document.querySelector("button");
addBtn.classList.add("right-gap");
const deleteAllBtn = document.getElementById("remove-all-completed");

addBtn.addEventListener("click", addNewTodo);

deleteAllBtn.addEventListener("click", deleteAllCompletedTodos);

document
  .getElementById("todo-list")
  .addEventListener("click", function (event) {
    const target = event.target;
    const classSpan = target.parentNode;
    const classLi = classSpan.parentNode.className;
    for (let element of todos) {
      if (element.task.replaceAll(" ", "-") === classLi) {
        if (target.innerText === "Undone") {
          element.completed = false;
        } else if (target.innerText === "Done") {
          element.completed = true;
        } else if (target.innerText === "Delete") {
          todos.splice(todos.indexOf(element), 1);
        }
      }
    }
    populateTodoList();
  });

window.onload = populateTodoList;
