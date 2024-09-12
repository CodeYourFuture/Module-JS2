function populateTodoList(todo) {
  let list = document.getElementById("todo-list");
  list.textContent = '';

  for (const item of todo) {
    const li = document.createElement('li');
    list.appendChild(li);
    li.textContent = item.task;

    const span = document.createElement('span');
    li.appendChild(span);

    //Add Deadline
    const date = document.createElement('i');
    span.appendChild(date);
    date.textContent = item.deadline;

    //added check button
    const iCheck = document.createElement('i');
    span.appendChild(iCheck);
    iCheck.classList.add('check');

    iCheck.addEventListener("click", () => {
      li.classList.toggle('completed');
      item.completed = !item.completed;
    });

    // added the delete button
    const iDelete = document.createElement('i');
    span.appendChild(iDelete);
    iDelete.classList.add('trash');

    iDelete.addEventListener("click", () => {
      todos = todos.filter(todoItem => todoItem !== item);
      populateTodoList(todos);
    });
  }
}

const addTodoButton = document.querySelector("#add");
const input = document.querySelector('#input');
const dateInput = document.querySelector('#date');
let todos = [
  { task: "Wash the dishes", completed: false, deadline: '2-10-2023' },
  { task: "Do the shopping", completed: false, deadline: '5-11-2023' }
];
populateTodoList(todos);

addTodoButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (input.value !== '' && dateInput.value !== '') {
    const newTodo = {
      task: input.value,
      completed: false,
      deadline: dateInput.value,
    };

    todos.push(newTodo);
    populateTodoList(todos);
  } else {
    alert('Either task or date is empty.');
  }

  input.value = '';
  dateInput.value = '';
})

// deletes the completed ones
function deleteAllCompletedTodos() {
  todos = todos.filter(item => !item.completed);
  populateTodoList(todos);
}


