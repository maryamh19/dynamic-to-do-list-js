// Define addTask function
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // Retrieve & trim value
    const taskText = taskInput.value.trim();

    // Check if empty
    if (taskText === "") {
        alert("Please enter a task");
        return;
    }

    // Create li
    const li = document.createElement("li");
    li.textContent = taskText;

    // Create remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    // Onclick removes li
    removeBtn.onclick = function () {
        taskList.removeChild(li);
    };

    // Append button → li → list
    li.appendChild(removeBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}

// Add event listeners
const addButton = document.getElementById("addButton");
const taskInput = document.getElementById("taskInput");

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
