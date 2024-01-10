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

document.getElementById("remove-all-completed").addEventListener("click", deleteAllCompletedTodos);

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

function addNewTodo(event) {
  event.preventDefault();
  let taskDescription = document.getElementById("taskInput").value;
  let task = { task: taskDescription, completed: false };
  todos.push(task);
  cleanToDoListHtml()
  populateTodoList(todos);
  document.getElementById("taskInput").value.value = "";
}

function deleteAllCompletedTodos() {
  todos = todos.filter(todo => !todo.completed);

  cleanToDoListHtml()
  populateTodoList(todos);
}

function handleDeleteTask(task) {
  let taskText = task.childNodes[2].innerText
  todos = todos.filter(todo => todo.task !== taskText);

  cleanToDoListHtml()
  populateTodoList(todos);
}

function handleChecked(task) {
  let taskText = task.childNodes[2].innerText

  todos.forEach(todo => {
    if (todo.task === taskText) {
      todo.completed = !todo.completed;
      return todo;
    }
  });

  cleanToDoListHtml()
  populateTodoList(todos);
}

function cleanToDoListHtml() {
  let list = document.getElementById("todo-list");
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}