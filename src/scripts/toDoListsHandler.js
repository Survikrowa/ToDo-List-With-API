import {
  postToDoList,
  getToDoList,
  deleteRequest,
  postTask
} from "./fetchHandler";
import { toDoList } from "./renderToDoList";
import { toDoTask } from "./renderToDoTask";

export const toDoListsHandler = async () => {
  const addNewTaskList = getAddTaskListBtn();
  addListenerToAddTaskBtn(addNewTaskList);
  addListenerToTaskList();
  const apiData = await getToDoList("api/todolists");
  renderHandler(apiData);
};

const getAddTaskListBtn = () => {
  return document.querySelector("#js-add-new-task-list");
};

const getInputValue = () => {
  return document.querySelector("#js-new-task-list").value;
};

const getInput = () => {
  return document.querySelector("#js-new-task-list");
};

const getTaskListRenderTarget = () => {
  return document.querySelector("#js-task-list-target");
};

const getTaskRenderTarget = taskListId => {
  return document
    .querySelector(`[data-id="${taskListId}"]`)
    .querySelector(".js-task-render-target");
};

const deleteTaskList = e => {
  if (e.target.parentNode.parentNode.classList.contains("toDoTask")) {
    e.target.parentNode.parentNode.remove();
  }
};
const deleteTask = e => {
  if (e.target.parentNode.classList.contains("task")) {
    e.target.parentNode.remove();
  }
};

const getCurrentToDoListId = e => {
  if (e.target.parentNode.parentNode.classList.contains("toDoTask")) {
    return e.target.parentNode.parentNode.dataset.id;
  }
};

const getCurrentTaskId = e => {
  if (e.target.parentNode.classList.contains("task")) {
    return e.target.parentNode.dataset.id;
  }
};

const renderList = (apiResponse, element) => {
  apiResponse.forEach(response => {
    element.insertAdjacentHTML("afterbegin", toDoList(response));
  });
};
const renderTask = (apiResponse, element) => {
  apiResponse.forEach(response => {
    element.insertAdjacentHTML("afterbegin", toDoTask(response));
  });
};

const clearDiv = div => {
  div.innerHTML = "";
};

const renderHandler = apiResponse => {
  const taskListRenderTarget = getTaskListRenderTarget();
  clearDiv(taskListRenderTarget);
  renderList(apiResponse, taskListRenderTarget);
  apiResponse.forEach(data => {
    const taskRenderTarget = getTaskRenderTarget(data.id);
    renderTask(data.tasks, taskRenderTarget);
  });
};

const clearInput = input => {
  input.value = "";
};

const addTaskBtnHandler = async () => {
  const input = getInput();
  if (getInputValue()) {
    const inputValue = getInputValue();
    await postToDoList("api/todolists/todolist", inputValue);
    const apiData = await getToDoList("api/todolists");
    renderHandler(apiData);
    clearInput(input);
  }
};

const getClosestInputValue = e => {
  return e.target.parentNode.parentNode.querySelector("input").value;
};

const addListenerToAddTaskBtn = element => {
  element.addEventListener("click", addTaskBtnHandler);
};

const isDeleteTaskListBtn = e => {
  const listId = getCurrentToDoListId(e);
  deleteRequest(`api/todolists/${listId}`);
  deleteTaskList(e);
};

const isDeleteTaskBtn = e => {
  const taskId = getCurrentTaskId(e);
  deleteRequest(`api/todolists/task/${taskId}`);
  deleteTask(e);
};

const isAddTaskBtn = async e => {
  const listId = getCurrentToDoListId(e);
  const taskInputValue = getClosestInputValue(e);
  postTask("api/todolists/task", {
    description: taskInputValue,
    toDoListId: listId
  });
  const apiData = await getToDoList("api/todolists");
  renderHandler(apiData);
};

const taskListBtnHandler = e => {
  if (e.target.classList.contains("js-delete-task-list-btn")) {
    isDeleteTaskListBtn(e);
  } else if (e.target.classList.contains("js-delete-task-btn")) {
    isDeleteTaskBtn(e);
  } else if (e.target.classList.contains("js-add-task")) {
    isAddTaskBtn(e);
  }
};

const addListenerToTaskList = () => {
  const taskListRenderTarget = getTaskListRenderTarget();
  taskListRenderTarget.addEventListener("click", e => {
    taskListBtnHandler(e);
  });
};
