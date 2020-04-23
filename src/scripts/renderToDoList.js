export const toDoList = listName => {
  return `
  <div class="toDoTask" data-id="${listName.id}">
    <div class="toDoTask__header">
        <span>${listName.name}</span>
            <button class="js-delete-task-list-btn">Delete Task List</button>
    </div>
        <fieldset class="toDoTask__fieldset">
            <label for="js-new-task" >Enter your task name:</label>
            <input type="text" class="js-new-task" name="task">
        </fieldset>
        <div class="toDoTask__taskAddContainer">
        <span>Your tasks:</span>    
        <button class="js-add-task">Add new Task</button>
           
        </div>
        <div class="js-task-render-target">
            
        </div>
   </div>`;
};
