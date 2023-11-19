function populateTodoList(todo) {
  let list = document.getElementById("todo-list");
  list.textContent = '';
  for (const item of todo) {
    const li = document.createElement('li');
    list.appendChild(li);
    li.textContent = item.task;
    //add the check button
    const span = document.createElement('span');
    li.appendChild(span);
        //Add Deadline
    const date = document.createElement('i');
    span.appendChild(date);
    date.textContent=item.deadline;
    const iCheck = document.createElement('i');
    span.appendChild(iCheck);
    iCheck.classList.add('check');
    iCheck.addEventListener("click", () => {
    li.classList.toggle('completed')
    });
    // add the delete button
    const iDelete = document.createElement('i');
    span.appendChild(iDelete);
    iDelete.classList.add('trash');
    iDelete.addEventListener("click", () => {
      li.remove();
      });
  }
}
const addTodoButton = document.querySelector("#add");
const input = document.querySelector('#input');
const date=document.querySelector('#date');

let todos = [
  { task: "Wash the dishes", completed: false, deadline: '2-10-2023' },
  { task: "Do the shopping", completed: false,  deadline: '5-11-2023'  }
];
populateTodoList(todos);

addTodoButton.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(date.value);
  const input = document.querySelector('#input');
  if(input.value!=='' && date.value!==''){
    todos.push({
      task: input.value,
      completed: false,
      deadline:date.value,
    });
  }else(
    alert('Fill task and date please!')
  )

  populateTodoList(todos);
  input.value = '';
  date.value = '';
})

// deletes the completed ones
function deleteAllCompletedTodos() {
  let listItems=document.getElementsByTagName('li')
   for (const item of listItems) {
    if (item.classList.contains('completed')) {
      item.remove();
    }
  }
}
