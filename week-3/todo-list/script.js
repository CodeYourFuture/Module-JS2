
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
  completedButton.style.fontSize = "20px"; 

  const deleteButton=document.createElement('i');
  // set up class names 
  deleteButton.className="fa fa-trash";
  deleteButton.style.fontSize = "35px"; 
   // set up class names 
  spanInList.className='badge bg-primary rounded-pill';
  
  //set aria-hidden attribute to true
  completedButton.setAttribute('aria-hidden','true');
  deleteButton.setAttribute('aria-hidden','true');



  // assigning value to span tag of date and list item
  //const numberOfDays=updateDeadLineCalculator(initialDeadLine,element.deadLineProperty);

  // geting span tag content to set up background
  bgColorSetupDate(spanForDate,element.deadLineProperty);
  spanForDate.textContent=updateDeadLineCalculator(element.deadLineProperty);
  
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
    
    if (element.completed) {
    todoItem.classList.add('checked');
  } else {
    todoItem.classList.remove('checked');
  }
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
  const newTodo={};
  if(deadLine.length!==''){
      newTodo.task=inputBox.value,
      newTodo.completed=false,
      newTodo.deadLineProperty=deadLine
  }

  else{
      newTodo.task=inputBox.value,
      newTodo.completed=false,
      newTodo.deadLineProperty=''
      }
  todos.push(newTodo);
  
  
    //   //reset the inputbox 
    // inputBox.value='';
    // document.getElementById('todo-date').value='';
      
    populateTodoList(todos);
        
    inputBox.value='';
    document.getElementById('todo-date').value='';
      console.log(todos);
}


const addToDoButton=document.querySelector('button[type=submit]');
addToDoButton.addEventListener('click',addNewTodo);

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
  const list=document.querySelectorAll("#todo-list li");
  list.forEach(item=>{
      if (item.classList.contains('checked')) {
      item.remove();
  }
  
})
}


const removeAllCompletedButton=document.getElementById("remove-all-completed");
removeAllCompletedButton.addEventListener('click',deleteAllCompletedTodos);


/////////////// date setup ///////////////////////////////

// initialising deadline
// function initialDeadLine(deadLineProperty){
//     // get deadLine date , creating a new date object based on deadlineproperty
//     const deadLineTime=new Date(deadLineProperty);

//     // declare variable of current date to colculate remained date
//     const currentTime=new Date();

//     //calculate diffrence time by Miliseconds
//     const diffTime=deadLineTime-currentTime;
    
//     //change it into days
//     const diffTimeByDays=Math.ceil(diffTime/(1000*60*60*24));
//     console.log('this is diffdays',diffTimeByDays);

//     return diffTimeByDays;
// }

// deadline calculator takes the todo deadlineproperty from the object
// and returns different time between today and deadline todo date by days

// function updateDeadLineCalculator(initialDeadLine,deadLineProperty){
//   let daysForInterval=(24*3600*1000);
//   const numberOfDays=initialDeadLine(deadLineProperty);
//   const intervalDeadLine=setTimeout(() => {
//     if(numberOfDays===''){
//     return 'Date is not set';

//     }

//   if(numberOfDays<=0){
//     clearInterval(intervalDeadLine);
//     }
//   }, daysForInterval);
  
  
// }

function updateDeadLineCalculator(deadLineProperty) {
  const daysForInterval = (24 * 3600 * 1000);
  const currentDate=new Date();
  const deadLineDate=new Date(deadLineProperty);

  const differenceOfDays=Math.ceil((deadLineDate-currentDate)/daysForInterval);
  const year=Math.floor(differenceOfDays/365);
  const month=Math.floor(differenceOfDays% 365 / 30);
  const days=Math.floor(differenceOfDays%365%30);

  let content='';
  if(deadLineProperty.length!=0){
  if(days>0 && month===0 && year===0){
    content= `${days} day's left`;
  }
  else if(days>0 && month>0 && year===0){
    content =`${month} months  ${days} day's left!`;
  }

  else if(days===0 && month===0&& year===0){
    content = 'few hours left!';
  }
  else {
    content=`${year} years and ${month} months and ${days} day's left! `;
  }
  
  return content;
  }

  else{
    return 'Date not been set';
  }

}



// set the date value for the sapn tag which  holds date in list
// setDateValue function prepare the text for the sapn tag which shows the remained time for the todo by days

// function setDateValue(numberOfDays){
//   //calcualting remained years for todo task
//   const years=Math.floor(numberOfDays/365);
//   //calculating remained month for todo task
//   const months=Math.floor(numberOfDays%365/30);
//   //calculating remained days for todo task
//   const days=Math.ceil(numberOfDays%365%30);

//   // based on the remained days proper message will be returned

//   //let message='';
  

// }


// set up back ground color of deadline date

function bgColorSetupDate(spanForDate,deadLineProperty){
  const currentDate=new Date();
  const deadLineDate=new Date(deadLineProperty);
  const differenceOfDays=Math.ceil((deadLineDate-currentDate)/(1000*3600*24));
  
  if (differenceOfDays === 0) {
    spanForDate.style.backgroundColor = 'red';
  } else if (differenceOfDays > 0 && differenceOfDays < 10) {
    spanForDate.style.backgroundColor = 'yellow';
  } else if (differenceOfDays >= 10) {
    spanForDate.style.backgroundColor = 'green';
  } else {
    spanForDate.style.backgroundColor = 'lightgray';
  }

}
