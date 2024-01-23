let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

function addNewTodo(event) {

  let list = document.getElementById("todo-list");
  let listValue = list.value;
 
  
  let li = document.createElement("li")
  li.classList.add("style-list");
    list.appendChild(li);

    
  let container = document.createElement("span")
    container.classList.add("layout");
      list.appendChild(container);

      
    let checkIcon = document.createElement("i");
    checkIcon.className = 'fa fa-check';
    checkIcon.setAttribute("aria-hidden", "true");
    checkIcon.onclick = function() {
      li.classList.toggle("completed");
    }
     container.appendChild(checkIcon);
   

    let trashIcon = document.createElement("i");
    trashIcon.className = 'fa fa-trash';
    trashIcon.setAttribute("aria-hidden", "true");
    trashIcon.onclick = function(){
      li.remove();
   };
        container.appendChild(trashIcon);

  let textNode = document.createTextNode(listValue);
  li.appendChild(container);
  li.appendChild(textNode);
       
  const ul = document.getElementById("task-list");
  ul.appendChild(li);

  list.value = "";
   event.preventDefault();
}


function deleteAllCompletedTodos(event) {
  let todoList = document.getElementById("task-list");
  let itemsTocompleted = document.querySelectorAll(".completed");
  itemsTocompleted.forEach(function (item) {
    todoList.removeChild(item);
  });
}











