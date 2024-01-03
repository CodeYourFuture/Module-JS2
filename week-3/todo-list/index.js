// let todos = [
//   { task: "Wash the dishes", completed: false },
//   { task: "Do the shopping", completed: false },
// ];
let todos = [];
console.log(todos);
const ul = document.getElementById("todo-list");

function addNewTodo() {
  const input = document.getElementById("todo-input").value;
  todos[todos.length] = { task: input, completed: false };
  console.log(todos);
  populateTodoList();
}

function populateTodoList() {
  const input = document.getElementById("todo-input").value;
  ul.innerHTML = "";

  for (const todo of todos) {
    const listOfItems = document.createElement("li");
    listOfItems.textContent = todo.task;
    ul.appendChild(listOfItems);
    console.log(todo);

    const span = document.createElement("span");
    listOfItems.appendChild(span);
    span.classList.add("badge", "bg-primary", "rounded-pill");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = todo.completed;
    checkBox.classList.add("todo-check");
    span.appendChild(checkBox);

    checkBox.addEventListener("change", () => {
      todo.completed = checkBox.checked;
      span.classList.toggle("completed", checkBox.checked);
    });

    const todoTrash = document.createElement("i");
    todoTrash.classList.add("fa", "fa-trash");
    span.appendChild(todoTrash);

    todoTrash.addEventListener("click", () => {
      list.removeChild(listOfItems);
      todos = todos.filter((todo) => todo !== item);
      populateTodoList(todos);
    });
  }
}

// populateTodoList();

// let todos = [];
// const ul = document.getElementById("todo-list");

// function populateTodoList() {
//   const input = document.getElementById("todo-input").value;
//   ul.innerHTML = "";
//   for (const todo of todos) {
//     const listOfItems = document.createElement("li");
//     listOfItems.textContent = todo.task;
//     ul.appendChild(listOfItems);
//     console.log(todo);
//   }
// }
