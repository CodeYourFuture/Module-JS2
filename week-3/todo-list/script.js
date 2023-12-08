
function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  list.innerHTML='';
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
  todos.forEach(element => {
  const todoItem=document.createElement('li');
  const spanInList=document.createElement('span');
  const completedButton=document.createElement('i');
  const spanForDate=document.createElement('span');
  spanForDate.className='dead-line';

  // set up class names 
  completedButton.className="fa fa-check";
  const deleteButton=document.createElement('i');
  // set up class names 
  deleteButton.className="fa fa-trash";
   // set up class names 
  spanInList.className='badge bg-primary rounded-pill';
  
  //set aria-hidden attribute to true
  completedButton.setAttribute('aria-hidden','true');
  deleteButton.setAttribute('aria-hidden','true');



  // assigning value to span tag of date and list item
  const numberOfDays=updateDeadLineCalculator(initialDeadLine,element.deadLineProperty);

  // geting span tag content to set up background
  bgColorSetupDate(spanForDate,numberOfDays);
  spanForDate.textContent=setDateValue(numberOfDays);
  
  todoItem.innerText=element.task;

  //appending childs 
  
  spanInList.appendChild(completedButton);
  spanInList.appendChild(deleteButton);
  spanInList.appendChild(spanForDate);
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


// set up min property not to let user pick up past dates
document.getElementById('todo-date').min=new Date().toISOString().split('T')[0];

//populateTodoList(todos);


// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const inputBox=document.querySelector('input[placeholder="New todo..."]');
  const inputdate=document.getElementById('todo-date');
  const deadLine=inputdate.value;
  
  const newTodo={
        task:inputBox.value,
        completed:false,
        deadLineProperty:new Date(deadLine)
      }
  const dateChecker=updateDeadLineCalculator(initialDeadLine,newTodo.deadLineProperty);

  if(dateChecker>=0 && newTodo.task.length!==0){
      todos.push(newTodo);

      //reset the inputbox 
      inputBox.value='';
      document.getElementById('todo-date').value='';
      
      populateTodoList(todos);
        
      }
      
  else{
    alert('Please Enter a  valid value');
    inputBox.value='';
    document.getElementById('todo-date').value='';
    return;
  }
}


const addToDoButton=document.querySelector('button[type=submit]');
addToDoButton.addEventListener('click',addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  
}

const removeAllCompletedButton=document.getElementById("remove-all-completed");
removeAllCompletedButton.addEventListener('click',deleteAllCompletedTodos);


/////////////// date setup ///////////////////////////////

// initialising deadline
function initialDeadLine(deadLineProperty){
    // get deadLine date , creating a new date object based on deadlineproperty
  const deadLineTime=new Date(deadLineProperty);

  // declare variable of current date to colculate remained date
  const currentTime=new Date();

  //calculate diffrence time by Miliseconds
  const diffTime=deadLineTime-currentTime;
  
  //change it into days
  const diffTimeByDays=Math.ceil(diffTime/(1000*60*60*24));

  return diffTimeByDays;
  
  }

// deadline calculator takes the todo deadlineproperty from the object
// and returns different time between today and deadline todo date by days

function updateDeadLineCalculator(initialDeadLine,deadLineProperty){
  let daysForInterval=(24*3600*1000);
  const intervalDeadLine=setInterval(() => {
    
    const numberOfDays=initialDeadLine(deadLineProperty);
    if(numberOfDays<=0){
    clearInterval(intervalDeadLine);
    }
  }, daysForInterval); 
}



// set the date value for the sapn tag which  holds date in list
// setDateValue function prepare the text for the sapn tag which shows the remained time for the todo by days
function setDateValue(numberOfDays){
  //calcualting remained years for todo task
  const years=Math.floor(numberOfDays/365);
  //calculating remained month for todo task
  const months=Math.floor(numberOfDays%365/30);
  //calculating remained days for todo task
  const days=Math.ceil(numberOfDays%365%30);

  // based on the remained days proper message will be returned

  let message='';
  if(days>0 && months===0 && years===0){
    return message=`${days} day's left`;
    
  }
  if(days>0 && months>0 && years===0){
    return message=`${months} months  ${days} day's left!`;
    
  }
  if(days===0 && months===0&& years===0){
    return message='few hours left!';
    
  }

  
  message=`${years} years and ${months} months and ${days} day's left!`;

  return message;

}


// set up back ground color of deadline date

function bgColorSetupDate(spanForDate,numberOfDays){
  if(numberOfDays===0){
    spanForDate.style.backgroundColor='red';
  }
  if(numberOfDays>0 && numberOfDays<10){
    spanForDate.style.backgroundColor='yellow';
  }
  if(numberOfDays>=10){
    spanForDate.style.backgroundColor='green';
  }
  if(numberOfDays===isNaN){
    spanForDate.style.backgroundColor='lightgray';
  }
}
