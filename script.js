
//Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded",()=>{
  //Selecting DOM Elements

  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  //Create the addTask Function

  function addTask(){
    const taskText = taskInput.value.trim();

    if(taskText === ""){
      alert("Please enter a task");
      return;
    }
    //Task creation and removal

    constlistItem = document.createElement("li");
    listItem.textCOntent = taskText;

    // Creating a new button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add = "remove-btn";


    //Add click event to remove the task
    removeBtn.onclick = () =>{
      taskList.removeChild(listItem);
    };

    //Append button to task item,then task item to list
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    //Clear input field
    taskInput.value = "";
  }


  //Add task on button click
  addButton.addEventListener("click",addTask);

  //Add task on Enter Key Press

  taskInput.addEventListener("keypress",(event)=>{
    if(event.key === "Enter") {
      addTask();
    }
  });

  })





