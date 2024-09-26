function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  todos.forEach((element) => {
    const listing = document.createElement("li");
    const spann = document.createElement("span");
    spann.className = "badge bg-primary rounded-pill";
    const add = document.createElement("i");
    const del = document.createElement("i");
    add.className = "fa fa-check";
    add.setAttribute("aria-hidden", "true");
    del.className = "fa fa-trash";
    del.setAttribute("aria-hidden", "true");
    spann.appendChild(add);
    spann.appendChild(del);
    listing.appendChild(spann);
    listing.textContent = element.task;
    list.appendChild(listing);
  });
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
