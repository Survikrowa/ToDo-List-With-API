export const toDoTask = taskName => {
  return `
    <div data-id="${taskName.id}">
        <span>${taskName.description}</span>
        <button class="js-delete-task-btn">Delete Task</button>
    </div>`;
};
