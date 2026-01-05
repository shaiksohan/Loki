let input = document.getElementById("taskInput");
let list = document.getElementById("taskList");

/* Load tasks on refresh */
window.onload = function () {
    let tasks = localStorage.getItem("tasks");
    if (tasks) {
        list.innerHTML = tasks;
    }
};

/* Add task */
function addTask() {
    if (input.value === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    let btn = document.createElement("button");

    span.innerText = input.value;
    btn.innerText = "Delete";

    btn.setAttribute("onclick", "deleteTask(this)");

    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);

    input.value = "";
    saveTasks();
}

/* Delete task */
function deleteTask(btn) {
    btn.parentElement.remove();
    saveTasks();
}

/* Save tasks */
function saveTasks() {
    localStorage.setItem("tasks", list.innerHTML);
}
