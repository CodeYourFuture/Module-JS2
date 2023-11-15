let list = document.getElementById("todo-list");
const addTodo = document.querySelector("#add");
const todos = [];

function addNewTodo() {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  const input = document.querySelector('input');
  if (input.value != "") {
    const li = document.createElement("li");
    list.appendChild(li);
    li.innerHTML = input.value;
    li.classList.add('list-item');
    const span = document.createElement("span");
    const htmlContent = '<i id="check" onclick="this.parentNode.parentNode.style.textDecoration=`line-through`;" ></i>'
      + '<i id="trash" onclick="this.parentNode.parentNode.remove()"></i>';
    span.innerHTML = htmlContent;
    li.appendChild(span);
    todos.push(li);
  }
}

populateTodoList(list);

// Advanced challenge: Write a function that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  for (const item of todos) {
    if (item.getAttribute("style") != null) {
      item.remove();
    }
  }
}