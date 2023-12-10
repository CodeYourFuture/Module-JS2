document.addEventListener("DOMContentLoaded", function () {
  const todoForm = document.getElementById("todo-form");
  const todoInput = document.getElementById("todoInput");
  const deadlineInput = document.getElementById("deadlineInput");
  const todoList = document.getElementById("todo-list");
  const removeAllCompletedButton = document.getElementById(
    "remove-all-completed"
  );
  const addTodoBtn = document.getElementById("addTodoBtn");

  let todos = [
    // { task: "Wash the dishes", completed: false, deadline: "" },
    // { task: "Do the shopping", completed: false, deadline: "" },
  ];

  function populateTodoList() {
    todoList.innerHTML = "";

    todos.forEach((todo, index) => {
      const li = document.createElement("li");
      const checkbox = createCustomCheckbox();
      const label = document.createElement("label");
      const deadlineText = document.createElement("span");
      const deleteIcon = document.createElement("span");

      checkbox.type = "checkbox";
      checkbox.checked = todo.completed;
      checkbox.addEventListener("change", () => toggleTodoCompleted(index));

      label.textContent = todo.task;
      label.style.textDecoration = todo.completed ? "line-through" : "none";

      // Display deadline if set
      if (todo.deadline) {
        deadlineText.textContent = ` | ${formatDeadline(
          new Date(todo.deadline)
        )}`;
      }

      deleteIcon.innerHTML = "&#x1F5D1;";
      deleteIcon.style.cursor = "pointer";
      deleteIcon.addEventListener("click", () => {
        if (checkbox.checked) {
          deleteTodo(index);
        }
      });

      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deadlineText);
      li.appendChild(deleteIcon);

      // Add custom styling for checked checkboxes
      if (checkbox.checked) {
        checkbox.style.backgroundColor = "green";

        checkbox.parentNode.style.color = "green";
      }

      todoList.appendChild(li);
    });
  }

  function addNewTodo(event) {
    event.preventDefault();

    const newTodoText = todoInput.value.trim();
    const newTodoDeadline = deadlineInput.value.trim();

    if (newTodoText !== "") {
      todos.push({
        task: newTodoText,
        completed: false,
        deadline: newTodoDeadline,
      });
      todoInput.value = "";
      deadlineInput.value = "";
      populateTodoList();
    }
  }

  function toggleTodoCompleted(index) {
    todos[index].completed = !todos[index].completed;
    populateTodoList();
  }

  function deleteTodo(index) {
    todos.splice(index, 1);
    populateTodoList();
  }

  function deleteAllCompletedTodos() {
    todos = todos.filter((todo) => !todo.completed);
    populateTodoList();
  }

  function formatDeadline(deadline) {
    // Customize the formatting of the deadline (e.g., using libraries like moment.js)
    return deadline.toLocaleString();
  }

  // Event listeners
  todoForm.addEventListener("submit", addNewTodo);
  addTodoBtn.addEventListener("click", addNewTodo);
  removeAllCompletedButton.addEventListener("click", deleteAllCompletedTodos);

  // Initial population of the todo list
  populateTodoList();
});
function createCustomCheckbox() {
  const checkbox = document.createElement("input");
  checkbox.className = "custom-checkbox";
  checkbox.type = "checkbox";

  // Add the click event listener after creating the checkbox
  checkbox.onclick = () => {
    console.log("Checkbox checked before click:", checkbox.checked);
    checkbox.checked = !checkbox.checked; // Toggle checkbox state
    console.log("Checkbox checked after click:", checkbox.checked);

    const li = checkbox.parentNode; // Get the list item containing the checkbox
    const task = li.querySelector("label").textContent; // Get the task text
  };

  return checkbox;
}
