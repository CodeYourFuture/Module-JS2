document.addEventListener('DOMContentLoaded', function () {
    const todoList = document.getElementById('todo-list');
    const addButton = document.getElementById('add-todo');
    const inputField = document.getElementById('new-todo');
    const removeAllCompletedButton = document.getElementById('remove-all-completed');

    addButton.addEventListener('click', addTodo);
    removeAllCompletedButton.addEventListener('click', removeCompletedTodos);

    function addTodo() {
        const todoText = inputField.value.trim();
        if (todoText !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="badge bg-primary rounded-pill">
                    <i class="fa fa-check" aria-hidden="true"></i>
                    <i class="fa fa-trash" aria-hidden="true"></i>
                </span>
                ${todoText}
            `;

            const tickIcon = li.querySelector('.fa-check');
            const binIcon = li.querySelector('.fa-trash');

            tickIcon.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            binIcon.addEventListener('click', () => {
                todoList.removeChild(li);
            });

            todoList.appendChild(li);
            inputField.value = '';
        }
    }

    function removeCompletedTodos() {
        const completedTodos = document.querySelectorAll('.completed');
        completedTodos.forEach((todo) => {
            todoList.removeChild(todo);
        });
    }
});
