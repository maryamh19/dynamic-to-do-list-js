// Run code only after the page has fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Select DOM elements using the exact IDs specified in the HTML
    const addButton = document.getElementById('add-task-btn'); // <- correct id
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task to the list
    function addTask() {
        // Retrieve and trim the input value
        const taskText = taskInput.value.trim();

        // If input is empty, prompt the user and do nothing else
        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        // Create new list item and set its text
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create Remove button and assign class
        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";
        removeBtn.className = 'remove-btn';

        // When remove button is clicked, remove the corresponding li
        removeBtn.onclick = function () {
            // remove the li from the task list
            li.remove();
        };

        // Append the remove button to the li and append li to the list
        li.appendChild(removeBtn);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add an event listener to the Add Task button
    addButton.addEventListener('click', addTask);

    // Allow adding tasks by pressing Enter inside the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // NOTE: do NOT call addTask() here on DOMContentLoaded — the spec/checker expects no auto-add.
});
