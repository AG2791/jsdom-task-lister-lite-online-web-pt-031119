document.addEventListener("DOMContentLoaded", () => {
  // your code here

// define variables 
  let taskList = new taskList();

  let  taskForm = document.getElementById("create-task-form");  
                                            //html element 
  let  newTaskDescription = document.getElementById("new-task-description")
                                                        //html element 
  const taskUl = document.getElementById("tasks");
                                      //html element 
  const renderApp = () => (taskUl.innerHTML = taskList.renderTasks());

  taskForm.addEventListener("submit", function(e) {
    if (e.preventDefault);  //prevents the app from default behavior of redirecting to new url when submit is clicked. 
    taskList.createNewTask(newTaskDescription.value);
    e.target.reset();
    renderApp();
  });

  taskUl.addEventListener("click", (e) => {
    if (e.target.nodeName === "BUTTON") {
      taskList.deleteTask(e.target.dataset.description);
      renderApp();
    }

  });
   
});


