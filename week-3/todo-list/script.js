function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.forEach(element => {
    let htmlLi = document.createElement("li");
    htmlLi.className = "todo-item";

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.checked = element.completed;
    htmlLi.appendChild(checkBox);

    let deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete";
    deleteTask.className = "delete-button";
    deleteTask.addEventListener("click", function(e) {
      handleDeleteTask(e.target.parentElement)
    });
    htmlLi.appendChild(deleteTask);

    let taskText = document.createElement("p");
    taskText.textContent = element.task;
    taskText.className = "task-text";
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
  list.removeChild(task);
}