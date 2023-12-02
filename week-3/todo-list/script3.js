let todos = [];
const todoList = document.getElementById("todo-list");
function addNewTodo() {
  let input = document.querySelector("input").value;
  todos[todos.length] = { task: input, completed: false };
  console.log(todos);
  populateTodoList();
}

function populateTodoList() {
  todoList.innerHTML = "";
  for (const item of todos) {
    let listItem = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", todos.length);
    let listItemLabel = document.createElement("label");
    listItemLabel.setAttribute("for", todos.length);
    listItemLabel.innerText = item.task;
    listItem.appendChild(listItemLabel);
    listItem.appendChild(checkbox);

    // chekbox line striike

    checkbox.addEventListener("change", function (event) {
      if (event.target.checked) {
        listItemLabel.setAttribute("class", "strike");
      } else {
        listItemLabel.setAttribute("class", "no-strike");
      }
    });

    //trash button

    let trashButton = document.createElement("button");
    listItem.appendChild(trashButton);
    let trashIcon = document.createElement("i");
    trashIcon.setAttribute("class", "fa fa-trash-o");
    trashButton.appendChild(trashIcon);

    trashButton.addEventListener("click", () => {
      // todos.splice(todos.length-1);
      const index = todos.indexOf(item);
      if (index > -1) {
        todos.splice(index, 1);
      }
    });

    todoList.appendChild(listItem);
  }
}

function deleteAllCompletedTodos() {
  // Write your code here...
}

// // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.

// // // This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
// function addNewTodo(event) {
//   let input = document.querySelector("input").value;
//   todos[todos.length] = { task: input, completed: false };

//   console.log(todos);
//   displayTodoList();
//   event.preventDefault();

// The code below prevents the page from refreshing when we click the 'Add Todo' button.
// Write your code here... and remember to reset the input field to be blank after creating a todo!
// }

// document.getElementById("button").addEventListener("click", displayTodoList);

// // Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
// function deleteAllCompletedTodos() {
//   // Write your code here...
// }
