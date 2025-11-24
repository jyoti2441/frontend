// Load tasks from localStorage when the page loads
window.onload = function () {
    if (localStorage.getItem("tasks")) {
        document.getElementById("taskList").innerHTML = localStorage.getItem("tasks");
    }
}

function saveTasks() {
    localStorage.setItem("tasks", document.getElementById("taskList").innerHTML);
}

document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
    let taskInput = document.getElementById("taskInput");
    let task = taskInput.value.trim();

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${task}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;

    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";

    saveTasks();
}

function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function editTask(button) {
    let li = button.parentElement;
    let currentText = li.querySelector("span").innerText;

    let newText = prompt("Edit your task", currentText);

    if (newText !== null && newText.trim() !== "") {
        li.querySelector("span").innerText = newText;
        saveTasks();
    }
}
