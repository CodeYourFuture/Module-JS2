function populateTodoList(todos) {
  // aqui eu retiro o valor da input
  let listItem = document.getElementById("todo-list").value;

  // se estiver vazio eu não adiciono nada
  if (listItem.trim() !== "") {
    // ver se a lista ul já não existe
    if (!document.getElementById("itemList")) {
      // crio uma ul
      const itemList = document.createElement("ul");
      itemList.id = "itemList";

      // adiciono a lista no body
      document.body.appendChild(itemList);
    }

    // para criar o li
    const newItem = document.createElement("li");

    // Adiciona a caixa de seleção
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    newItem.appendChild(checkbox);

    // Adiciona o texto da tarefa
    newItem.appendChild(document.createTextNode(listItem));

    // a li vira filha da ul
    document.getElementById("itemList").appendChild(newItem);

    // depois disso para limpar o retângulo do input
    document.getElementById("todo-list").value = "";
  }
}

window.onload = function() {
  const addButton = document.querySelector('button[type="submit"]');
  addButton.addEventListener('click', function(event) {
      event.preventDefault(); // Impede a submissão do formulário
      populateTodoList();
  });
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];




//O CODIGO NAO FUNCIOU NAO SEI O MOTIVO TESTAR EM AULA

// function deleteAllCompletedTodos() {
//   // Obtém todos os itens da lista
//   const items = document.querySelectorAll('#itemList li');

//   // Itera sobre os itens
//   items.forEach(item => {
//     // Obtém a caixa de seleção associada ao item
//     const checkbox = item.querySelector('input[type="checkbox"]');

//     // Verifica se a caixa de seleção está marcada
//     if (checkbox.checked) {
//       // Remove o item da lista
//       item.remove();
//     }
//   });
// }























/*

populateTodoList(todos);

// This function will take the value of the input field and add it as a
// new todo to the bottom of the todo list. These new todos will need the
// completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we 
  //click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input
  // field to be blank after creating a todo!
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos() {
  // Write your code here...
}

*/ 