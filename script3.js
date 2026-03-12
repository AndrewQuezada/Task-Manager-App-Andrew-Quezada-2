//array

let tasks = [];

//add task
function addTask(){
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    console.log(task);

    //check
    if ( task !==""){
        tasks.push(task);
        input.value = "";
        console.log(tasks);
        displayTasks();
    }
}
// to display task Items

/*function displayTasks(){
    const taskList = document.getElementById("taskList");
    let html ='';

    for(let i = 0; i < tasks.length; i++){
        html += `
            <div class="task-item">

            <span class="task-text"> ${i+1} ${tasks[i]}</span>
            <div class="button-group">
                    
                        <button class="edit-btn" onclick="editTask(${i})"> Edit </button>
                        <button class="delete-btn" onclick="deleteTask(${i})">Delete</button>
            </div>

            </div>
        
        
        `;
    }

    taskList.innerHTML = html;
    console.log(tasks);
}*/



function displayTasks(){
    const taskList = document.getElementById("taskList");
    let html ='';
    tasks.forEach((task, index) => {
        html += `
            <div class="task-item">

            <span class="task-text"> ${index + 1} ${task}</span>
            <div class="button-group">
                    
                        <button class="edit-btn" onclick="editTask(${index})"> Edit </button>
                        <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
            </div>

            </div>
        
        
        `;
    })

    taskList.innerHTML = html;
    console.log(tasks);
}

 function editTask(index){
        const newTask = prompt("Edit Task;" ,tasks[index]);
       // const newTask = tasks[index];
        console.log(newTask)
        if(newTask !== null && newTask.trim() !== "")
            {
        tasks[index] = newTask.trim();
        displayTasks();
        }
        console.log(tasks);
    }

function deleteTask(index){

    tasks.splice(index,1);
    console.log(tasks);
    displayTasks();
}
