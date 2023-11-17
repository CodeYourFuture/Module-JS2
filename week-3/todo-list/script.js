let list = document.getElementById("todo-list");
const addTodo = document.querySelector("#add");
const todos = [];


console.log(todos);
function addNewTodo() {
  event.preventDefault();
  const input = document.querySelector('input');
  if (input.value !== "") {
    const li = document.createElement("li");
    list.appendChild(li);
    li.textContent = input.value;
    li.classList.add('list-item');
    const span = document.createElement("span");
    const htmlContent = 
    '<i id="check" onclick="this.parentNode.parentNode.classList.toggle(`completed`)"></i>'
      + '<i id="trash" onclick="this.parentNode.parentNode.remove()"></i>';
    span.innerHTML = htmlContent;
    li.appendChild(span);
    todos.push(li);
  }
}


// deletes the completed ones
function deleteAllCompletedTodos() {
  for (const item of todos) {
    if (item.classList.contains('completed')) {
      item.remove();
    }
  }
}





