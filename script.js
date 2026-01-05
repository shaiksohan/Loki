let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

/* Load saved tasks on refresh */
window.onload = function () {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
        list.innerHTML = tasks;
    }
};

/* ADD TASK (SIMPLIFIED) */
function addTask() {
    if (input.value === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML =
        "<span>" + input.value + "</span>" +
        "<button onclick='deleteTask(this)'>Delete</button>";

    /* Mark completed */
    li.querySelector("span").onclick = function () {
        li.classList.toggle("completed");
        saveTasks();
    };

    list.appendChild(li);
    input.value = "";
    saveTasks();
}

/* DELETE SINGLE TASK */
function deleteTask(button) {
    button.parentElement.remove();
    saveTasks();
}

/* SAVE TASKS */
function saveTasks() {
    localStorage.setItem("tasks", list.innerHTML);
}
