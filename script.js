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
    if (input.value === "" || timeInput.value ==="") {
        alert("Please enter a task and time");
        return;
    }

    let li = document.createElement("li");
    let span = document.createElement("span");
    let btn = document.createElement("button");
    let time =document.createElement("span");

    span.innerText = input.value;
    time.innerText=timeInput.value;
    time.className="task-time";

    btn.innerText = "Delete";
    btn.setAttribute("onclick", "deleteTask(this)");

    li.appendChild(span);
    li.append(time);
    li.appendChild(btn);
    list.appendChild(li);

    input.value = "";
    timeInput.value="";
    saveTasks();
}

/* Delete task */
function deleteTask(btn) {
    btn.parentElement.remove();
    saveTasks();
}

/* DELETE ALL */
function deleteAllTasks(){
    list.innerHTML="";
    localStorage.removeItem("tasks");
}
/* Save tasks */
function saveTasks() {
    localStorage.setItem("tasks", list.innerHTML);
}
