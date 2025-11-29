document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function addTask() {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement('li');

        // Create a text node instead of using textContent
        const taskTextNode = document.createTextNode(taskText + " ");
        li.appendChild(taskTextNode);

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        removeBtn.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        taskInput.value = "";
    }

    addButton.addEventListener('click', addTask);

    // Use 'keydown' for better compatibility than 'keypress'
    taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
