function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.forEach(element => {
    let htmlLi = document.createElement("li");
    htmlLi.className = "todo-item";

    let checkBox = document.createElement("i");
    checkBox.className = `fa-solid fa-check ${element.completed ? 'checked' : ''}`
    checkBox.addEventListener("click", function (e) {
      handleChecked(e.target.parentElement)
    });
    htmlLi.appendChild(checkBox);

    let deleteTask = document.createElement("i");
    deleteTask.className = "delete-button fa-solid fa-trash";
    deleteTask.addEventListener("click", function (e) {
      handleDeleteTask(e.target.parentElement)
    });
    htmlLi.appendChild(deleteTask);

    let taskText = document.createElement("p");
    taskText.textContent = element.task;
    taskText.className = `task-text ${element.completed ? 'checked' : ''}`;
    htmlLi.appendChild(taskText);
    list.appendChild(htmlLi);
  });
}

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();
}

function deleteAllCompletedTodos() {
}

function handleDeleteTask(task) {
  let list = document.getElementById("todo-list");
  let taskText = task.childNodes[2].innerText
  todos = todos.filter(todo => todo.task !== taskText);
  list.removeChild(task);
}

function handleChecked(task) {
  let list = document.getElementById("todo-list");
  let taskText = task.childNodes[2].innerText

  todos.forEach(todo => {
    if (todo.task === taskText) {
      todo.completed = !todo.completed;
      return todo;
    }
  });
  console.log(todos);
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  populateTodoList(todos)
}