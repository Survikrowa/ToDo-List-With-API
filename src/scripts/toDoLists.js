export const toDoLists = `
<header>
    <h1 class="header__h1">Main Panel</h1>
</header>
<main class="toDoList">
    <section>
    <h2 class="toDoList__header">Task lists</h2>
        <div id="js-task-list-target"></div> 
    </section>
    <section class="toDoList__addTask" >
        <fieldset class="toDoList__fieldset">
            <label for="js-new-task-list" >Enter your task list name:</label>
            <input type="text" id="js-new-task-list" name="task-list" class="toDoList__input"  value="" />
        </fieldset>
        <button type="button" class="btn btn__primary" id="js-add-new-task-list">Add Task-List</button>
    </section>
</main>`;
