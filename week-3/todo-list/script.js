const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// Load the existing data when the page loads
window.addEventListener("load", showList);

function populateTodoList() {
  if (inputBox.value === "") {
    alert("You must write a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "🗑";
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
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

function deleteList() {
  var list = document.querySelector(".checked");
  if (list) {
    list.parentNode.removeChild(list);
    saveData();
  } else {
    console.log("UL element not found");
  }
}
