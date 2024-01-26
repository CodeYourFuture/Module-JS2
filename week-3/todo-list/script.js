function populateTodoList() {
  list.innerHTML = "";
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

  for (let element of todos) {
    const todo = document.createElement("li");
    todo.innerText = element.task;
    todo.classList.add(element.task.replaceAll(" ", "-"));

    const doneButton = document.createElement("button");
    doneButton.innerText = "Done";
    doneButton.classList.add("done-btn");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete-btn");

    todo.appendChild(doneButton);
    todo.appendChild(deleteButton);
    list.appendChild(todo);

    if (element.completed) {
      todo.style.textDecoration = "line-through";
      doneButton.innerText = "Undone";
    }
  }
}

const list = document.createElement("ul");
list.setAttribute("id", "todo-list");
document.body.appendChild(list);

document
  .getElementById("todo-list")
  .addEventListener("click", function (event) {
    const target = event.target;
    const classLi = target.parentNode.className;
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

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

window.onload = populateTodoList;

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const inbox = document.querySelector("input");

  todos.push({ task: inbox.value, completed: false });
  console.log(todos);
  inbox.value = "";
  populateTodoList();
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...

  todos = todos.filter((element) => !element.completed);
  populateTodoList();
}

document.querySelector("button").addEventListener("click", addNewTodo);
document
  .getElementById("remove-all-completed")
  .addEventListener("click", deleteAllCompletedTodos);
