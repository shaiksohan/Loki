let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

/* Load saved tasks */

window.onload = function () {
    let savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        list.innerHTML = savedTasks;
    }
};
/* Add task */
function addTask() {
    if (input.value === "") {
        alert("Please enter a task");
        return;
        
    }

    let li = document.createElement("li");

    li.innerHTML =
        "<span>" + input.value + "</span>" +
        "<button onclick='deleteTask(event, this)'>Delete</button>";

    li.querySelector("span").onclick = function () {
        li.classList.toggle("completed");
        saveTasks();
    };

    list.appendChild(li);
    input.value = "";
    saveTasks();
}

/* Delete single task */
function deleteTask(event, button) {
    event.stopPropagation();
    button.parentElement.remove();
    saveTasks();
}

/* ✅ DELETE ALL TASKS (FIXED) */
function deleteAllTasks() {
    if (list.children.length === 0) {
        alert("No tasks to delete");
        return;
    }

    if (confirm("Are you sure you want to delete all tasks?")) {
        list.innerHTML = "";
        localStorage.removeItem("tasks");
    }
}

/* Save tasks */
function saveTasks() {
    localStorage.setItem("tasks", list.innerHTML);
}


