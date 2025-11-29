document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        const taskText = taskInput.value.trim();

        // If taskText is not empty
        if (taskText !== "") {

            // Create a new li element and set its textContent to taskText
            const li = document.createElement('li');
            li.textContent = taskText;

            // Create a remove button, set its textContent and className
            const removeBtn = document.createElement('button');
            removeBtn.textContent = "Remove";
            removeBtn.className = 'remove-btn';

            // Assign onclick event that removes li from taskList
            removeBtn.onclick = function () {
                taskList.removeChild(li);
            };

            // Append remove button to li
            li.appendChild(removeBtn);

            // Append li to taskList
            taskList.appendChild(li);

            // Clear input field
            taskInput.value = "";
        }
    }

    // Event listener: addButton calls addTask on click
    addButton.addEventListener('click', addTask);

    // Event listener: pressing Enter in taskInput calls addTask
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
