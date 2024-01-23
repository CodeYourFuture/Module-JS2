function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.forEach((element) => {
    const listing = document.createElement("li");
    const rem = document.createElement("span");
    const add = document.createElement("span");
    const dateCale = document.createElement("span");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("inputing");
    dateInput.style.display = "none";
    rem.textContent = "🗑";
    add.textContent = "✅";
    dateCale.textContent = "📅";
    listing.appendChild(rem);
    listing.appendChild(add);
    listing.appendChild(dateCale);
    listing.appendChild(dateInput);
    const taskText = document.createTextNode(element.task);
    listing.appendChild(taskText);
    list.appendChild(listing);
    let clickCount = 0;
    dateCale.addEventListener("click", () => {
      if (dateInput.style.display === "none") {
        dateInput.style.display = "block";
      } else {
        dateInput.style.display = "none";
      }
    });


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
 }

let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];


populateTodoList(todos);

function addNewTodo(event) {
  const inputTodo = document.getElementById("textboxinput");
  const buttonTodo = document.querySelector("button");
  buttonTodo.addEventListener("click", (event) => {
    event.preventDefault();
    const newList = document.createElement("li");
    let list = document.getElementById("todo-list");
    const tex = document.createTextNode(inputTodo.value);
    inputTodo.value = "";
    const rem = document.createElement("span");
    const add = document.createElement("span");
    const dateCale = document.createElement("span");
    const dateInput = document.createElement("input");
    dateInput.type = "date";
    dateInput.classList.add("inputing");
    dateInput.style.display = "none";
    rem.textContent = "🗑";
    add.textContent = "✅";
    dateCale.textContent = "📅";
    newList.appendChild(rem);
    newList.appendChild(add);
    newList.appendChild(dateCale);
    newList.appendChild(dateInput);
    newList.append(tex);
    list.appendChild(newList);


    let clickCount = 0;


    dateCale.addEventListener("click", () => {
      if (dateInput.style.display === "none") {
        dateInput.style.display = "block";
      } else {
        dateInput.style.display = "none";
      }
    });
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


  }
addNewTodo();
function deleteAllCompletedTodos() {
  const del = document.getElementById("remove-all-completed");
  let list = document.getElementById("todo-list");
  del.addEventListener("click", () => {
    list.textContent = "";
  });
  
}
deleteAllCompletedTodos();



