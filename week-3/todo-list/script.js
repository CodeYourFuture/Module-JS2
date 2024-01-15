// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {

  let list = document.getElementById("todo-list");
  let listValue = list.value;
 
  
  let li = document.createElement("li")
  li.classList.add("style-list");
  list.appendChild(li);
  
  let container = document.createElement("span")
    container.className = "badge bg-primary rounded-pill";
      container.classList.add("layout");
      list.appendChild(container);

      
    let checkIcon = document.createElement("i");
    checkIcon.className = 'fa fa-check';
    checkIcon.setAttribute("aria-hidden", "true");
    checkIcon.onclick = function() {
      li.classList.toggle("completed");
    }
   

    let trashIcon = document.createElement("i");
    trashIcon.className = 'fa fa-trash';
    trashIcon.setAttribute("aria-hidden", "true");
    trashIcon.onclick = function(){
      li.remove();
   };
        container.appendChild(checkIcon);
        container.appendChild(trashIcon);

  let textNode = document.createTextNode(listValue);
  li.appendChild(container);
  li.appendChild(textNode);
       
  const ul = document.getElementById("task-list");
  ul.appendChild(li);

  list.value = "";
   event.preventDefault();
}


// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(event) {
  let todoList = document.getElementById("task-list");
  let completedItems = document.querySelectorAll(".completed");
  completedItems.forEach(function (item) {
    todoList.removeChild(item);
  });
}











