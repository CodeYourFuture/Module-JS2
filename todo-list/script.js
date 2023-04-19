const content = document.querySelector("#content");

function toggleIsCompleted(todo) {
  todo.classList.toggle("is-complete");
}

function removeTodo(todo) {
  todo.remove();
}

const removeAllBtn = document.querySelector("#remove-all-completed");

function removeCompletedTodos() {
  const todoItems = document.querySelectorAll("li");
  [...todoItems].forEach((todoItem) => {
    if (todoItem.classList.contains("is-complete")) {
      removeTodo(todoItem);
    }
  });
}

removeAllBtn.addEventListener("click", removeCompletedTodos);

function createTodoListItem({ todo }) {
  const todoItem = document.createElement("li");
  const tickIcon = document.createElement("i");
  tickIcon.classList.add("fa-check", "fa-solid");
  const binIcon = document.createElement("i");
  binIcon.classList.add("fa-trash", "fa-solid");
  todoItem.innerText = todo;
  todoItem.append(tickIcon, binIcon);
  binIcon.addEventListener("click", () => removeTodo(todoItem));
  tickIcon.addEventListener("click", () => toggleIsCompleted(todoItem));
  return todoItem;
}

function todoList(todos) {
  const todoList = document.createElement("ul");
  todos.forEach(({ todo }) => {
    const todoItem = createTodoListItem({ todo });
    todoList.appendChild(todoItem);
  });

  content.appendChild(todoList);
}

const button = document.querySelector("button");
button.addEventListener("click", function (e) {
  const input = document.querySelector("input");
  const todoList = document.querySelector("ul");
  const todoItem = createTodoListItem({ todo: input.value });
  todoList.appendChild(todoItem);
});

const todos = [{ todo: "wash the dishes" }, { todo: "do the shopping" }];

todoList(todos);
