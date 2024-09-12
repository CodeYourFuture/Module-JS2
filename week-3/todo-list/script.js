const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function populateTodoList() {
  if (inputBox.value === "") {
    alert("You must write a task");
  } else {
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.textContent = "🗑";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    saveData();
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
    saveData();
  }
}, false);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

function deleteList() {
  var checkedItems = document.querySelectorAll(".checked");
  checkedItems.forEach(function (item) {
    item.remove();
  });
}

// then we call the showList function to display the data on page load
showList();
