function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.forEach((element) => {
    const listing = document.createElement("li");
    const rem = document.createElement("span");
    const add = document.createElement("span");
    rem.textContent = "🗑";
    add.textContent = "✅";
    listing.appendChild(rem);
    listing.appendChild(add);
    const taskText = document.createTextNode(element.task);
    listing.appendChild(taskText);
    list.appendChild(listing);
    let clickCount = 0;


    add.addEventListener("click", () => {
      clickCount++;
      let isEvenClick = clickCount % 2 === 0;


      if (isEvenClick) {
        listing.style.textDecoration = "none";
      } else {
        listing.style.textDecoration = "line-through";
      }
    });


    rem.addEventListener("click", () => {
      listing.remove();
    });
  });
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}


// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];


populateTodoList(todos);


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  const inputTodo = document.querySelector("input");
  const buttonTodo = document.querySelector("button");
  buttonTodo.addEventListener("click", (event) => {
    event.preventDefault();
    const newList = document.createElement("li");
    let list = document.getElementById("todo-list");
    const tex = document.createTextNode(inputTodo.value);
    inputTodo.value = "";
    const rem = document.createElement("span");
    const add = document.createElement("span");
    rem.textContent = "🗑";
    add.textContent = "✅";
    newList.appendChild(rem);
    newList.appendChild(add);
    newList.append(tex);
    list.appendChild(newList);


    let clickCount = 0;


    add.addEventListener("click", () => {
      clickCount++;
      let isEvenClick = clickCount % 2 === 0;


      if (isEvenClick) {
        newList.style.textDecoration = "none";
      } else {
        newList.style.textDecoration = "line-through";
      }
    });


    rem.addEventListener("click", () => {
      newList.remove();
    });
  });


  // The code below prevents the page from refreshing when we click the 'Add Todo' button.


  // Write your code here... and remember to reset the input field to be blank after creating a todo!
}
addNewTodo();
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  const del = document.getElementById("remove-all-completed");
  let list = document.getElementById("todo-list");
  del.addEventListener("click", () => {
    list.textContent = "";
  });
  // Write your code here...
}
deleteAllCompletedTodos();



