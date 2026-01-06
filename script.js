let taskInput = document.getElementById("taskInput");
let timeInput = document.getElementById("timeInput");
let taskList = document.getElementById("taskList");

let tasks= JSON.parse(localStorage.getItem("tasks")) || [];

function saveTasks(){
    localStorage.setItem("tasks",JSON.stringify(tasks));
}

/* Add task */
function addTask() {
    console.log("addTask clicked");
    let taskText=taskInput.value;
    let taskTime=timeInput.value;
    console.log(taskText,taskTime);
    if (taskText === "" || taskTime ==="") {
        alert("Please enter a task and time");
        return;
    }
    tasks.push({
        text:taskText,
        time:taskTime,
        done:false
    });
    
    saveTasks();
    renderTasks();

    taskInput.value="";
    timeInput.value="";
}
function renderTasks(){
    taskList.innerHTML="";
    tasks.forEach((task,index)=>{
        let li=document.createElement("li");
        li.innerText= task.text + "-" + task.time;
       
        taskList.appendChild(li);
    });
}
function deleteAllTasks() {
    tasks = [];
    saveTasks();
    renderTasks();
}
setInterval(checkTime,1000);
function checkTime(){
    let now= new Date();
    let currentTime=now.getHours().toString().padStart(2,"0") + ":" + now.getMinutes().toString().padStart(2,"0");
    tasks.forEach(task=>{
        if(!task.done && task.time===currentTime){
            alert("Reminder :"+ task.text);
            task.done=true;
            saveTasks();
        }
    });
}


renderTasks();

