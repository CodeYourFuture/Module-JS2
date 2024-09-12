// function populateTodoList(todos) {
//   let list = document.getElementById("todo-list");
//   // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
// }

// // These are the same todos that currently display in the HTML
// // You will want to remove the ones in the current HTML after you have created them using JavaScript
// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];

// populateTodoList(todos);

// // This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
// const button = document.querySelector("#add_todo");
// button.addEventListener("click", addNewTodo);
// const ul = document.getElementById("unorder_list");
// // console.log(ul);
// function addNewTodo(event) {
//   // The code below prevents the page from refreshing when we click the 'Add Todo' button.
//   event.preventDefault();
//   // Write your code here... and remember to reset the input field to be blank after
//   const input = document.querySelector("#input").value;
//   const nweToDo = { task: input };
//   // const li = document.createElement("li");
//   // ul.appendChild(li);

//   // li.textContent = input;
// }

// // Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
//   // Write your code here...
// }



function populateTodoList(todos) {
  let list = document.getElementById("todo-list");

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.task;

    const span = document.createElement("span");
    span.className = "badge bg-primary rounded-pill";

    const checkIcon = document.createElement("i");
    checkIcon.className = "fa fa-check";
    checkIcon.setAttribute("aria-hidden", "true");
    checkIcon.addEventListener("click", () => toggleCompleted(li));

    const trashIcon = document.createElement("i");
    trashIcon.className = "fa fa-trash";
    trashIcon.setAttribute("aria-hidden", "true");
    trashIcon.addEventListener("click", () => deleteTodo(li));

    span.appendChild(checkIcon);
    span.appendChild(trashIcon);

    li.appendChild(span);
    list.appendChild(li);
  });
}

function toggleCompleted(todoElement) {
  todoElement.classList.toggle("completed");
}

function deleteTodo(todoElement) {
  todoElement.remove();
}

const button = document.querySelector("#add_todo");
button.addEventListener("click", addNewTodo);

const removeAllCompletedButton = document.querySelector("#remove-all-completed");
removeAllCompletedButton.addEventListener("click", deleteAllCompletedTodos);

function addNewTodo(event) {
  event.preventDefault();

  const input = document.querySelector("#input").value;
  const newToDo = { task: input, completed: false };
  
  populateTodoList([newToDo]);

  document.querySelector("#input").value = ""; // Reset the input field
}

function deleteAllCompletedTodos() {
  const completedTodos = document.querySelectorAll(".completed");
  completedTodos.forEach((todo) => todo.remove());
}

