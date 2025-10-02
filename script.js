
//Setup Event Listener for Page Load
document.addEventListener("DOMContentLoaded",()=>{


  //Initialize and Load Tasks
  function loadTasksFromLocalStorage(){

    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(taskText =>addTask(taskText,false));//'false' indicates not to save again to local storage

  }
  



  //Selecting DOM Elements




  const addButton = document.getElementById("add-task-btn");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");



  //Create the addTask Function

  function addTask(taskText,save = true){
   // const taskText = taskInput.value.trim();

    if(taskText === ""){
      alert("Please enter a task");
      return;
    }
    //Task creation and removal

    const listItem = document.createElement("li");
    listItem.textContent = taskText;

    // Creating a new button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");


    //Add click event to remove the task
    removeBtn.onclick = () =>{
      taskList.removeChild(listItem);
      updateLocalStorage();//Update storage after removal
    };

    //Append button to task item,then task item to list
    listItem.appendChild(removeBtn);
    taskList.appendChild(listItem);

    //Clear input field
    taskInput.value = "";

    //Update local storage with all current tasks
    updateLocalStorage();
  }

  //Helper unction to sync current tasks to lacal storage
  function updateLocalStorage (){
    const tasks = Array.from(taskList.children).map(li =>li.firstChild.textContent);
    localStorage.setItem ("tasks",JSON.stringify(tasks));
  }


  //Add task on button click
  addButton.addEventListener("click",() =>{
    addTask(taskInput.value.trim());
    taskInput.value = "";
  });

  //Add task on Enter Key Press

  taskInput.addEventListener("keypress",(event)=>{
    if(event.key === "Enter") {
      addTask(taskInput.value.trim());
      taskInput.value = "";
    }
  })

  loadTasksFromLocalStorage();

  });


 




