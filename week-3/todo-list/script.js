
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML='';
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach(element => {
  const todoItem=document.createElement('li');
  const spanInList=document.createElement('span');
  const completedButton=document.createElement('i');
  completedButton.className="fa fa-check";
  const deleteButton=document.createElement('i');
  deleteButton.className="fa fa-trash";
   // set up class names 
  spanInList.className='badge bg-primary rounded-pill';
  
  

  //set aria-hidden attribute to true
  completedButton.setAttribute('aria-hidden','true');
  deleteButton.setAttribute('aria-hidden','true');

  todoItem.innerText=element.task;
  //appending childs 
  spanInList.appendChild(completedButton);
  spanInList.appendChild(deleteButton);
  todoItem.appendChild(spanInList);
    // append the <li> to the begining of the <ul>
  list.prepend(todoItem);

  completedButton.addEventListener('click',function(){
    todoItem.classList.toggle('completed');
    element.completed=!element.completed;
  })

  deleteButton.addEventListener('click',function(){
    todoItem.remove();
    let index=todos.indexOf(element);
    todos.splice(index,1);
  })
  
  });

}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  //{ task: "Wash the dishes", completed: false },
  //{ task: "Do the shopping", completed: false },
];



//populateTodoList(todos);


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const inputBox=document.querySelector('input[placeholder="New todo..."]');
  if(inputBox.value.length>0){
    const newTodo={
    task:inputBox.value,
    completed:false
  }

  todos.push(newTodo);

  //reset the inputbox 
  inputBox.value='';

  populateTodoList(todos);
  
  }
}


const addToDoButton=document.querySelector('button[type=submit]');
addToDoButton.addEventListener('click',addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  const list=document.getElementById('todo-list');
  list.innerHTML='';
}
