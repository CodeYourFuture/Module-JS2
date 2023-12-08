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

    const removeButton = document.createElement("button");
    removeButton.innerHTML = `remove `
    removeButton.addEventListener("click", function () {
      document.getElementById("itemList").removeChild(newItem);

      if (window.confirm("Do you want do delete?")) {
        window.alert("deleted!");
      }
      
    });
    newItem.appendChild(removeButton);

    // confrim.alert

 
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




let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];




//my remove all is not working, and i dont know why



















