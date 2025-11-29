document.addEventListener('DOMContentLoaded', function () {

    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    function getStoredTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }

    function saveTasksArray(arr) {
        localStorage.setItem('tasks', JSON.stringify(arr));
    }

    function addTask(taskText, save = true) {
        let text = typeof taskText === "string" ? taskText.trim() : taskInput.value.trim();
        if (text === "") return;

        const li = document.createElement('li');
        li.textContent = text;

        // OPTIONAL if needed
        // li.classList.add('task-item');

        const removeBtn = document.createElement('button');
        removeBtn.textContent = "Remove";

        // REQUIRED BY YOUR SPEC
        removeBtn.classList.add('remove-btn');

        removeBtn.onclick = function () {
            taskList.removeChild(li);

            const tasks = getStoredTasks();
            const index = tasks.indexOf(text);
            if (index !== -1) {
                tasks.splice(index, 1);
                saveTasksArray(tasks);
            }
        };

        li.appendChild(removeBtn);
        taskList.appendChild(li);

        if (typeof taskText !== "string") {
            taskInput.value = "";
        }

        if (save) {
            const tasks = getStoredTasks();
            tasks.push(text);
            saveTasksArray(tasks);
        }
    }

    addButton.addEventListener('click', function () {
        addTask();
    });

    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    loadTasks();
});
