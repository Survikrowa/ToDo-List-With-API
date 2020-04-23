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
  e.target.parentNode.parentNode.remove();
};
const deleteTask = e => {
  e.target.parentNode.remove();
};

const getCurrentToDoListId = e => {
  return e.target.parentNode.parentNode.dataset.id;
};

const getCurrentTaskId = e => {
  return e.target.parentNode.dataset.id;
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

const clearList = element => {
  element.innerHTML = "";
};

const renderHandler = apiResponse => {
  const taskListRenderTarget = getTaskListRenderTarget();
  clearList(taskListRenderTarget);
  renderList(apiResponse, taskListRenderTarget);
  for (let i = 0; i < apiResponse.length; i++) {
    const taskRenderTarget = getTaskRenderTarget(apiResponse[i].id);
    renderTask(apiResponse[i].tasks, taskRenderTarget);
  }
};

const clearInput = element => {
  element.value = "";
};

const addTaskBtnHandler = async () => {
  const inputValue = getInputValue();
  const input = getInput();
  if (inputValue) {
    await postToDoList("api/todolists/todolist", "POST", inputValue);
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

const taskListBtnHandler = async e => {
  if (e.target.classList.contains("js-delete-task-list-btn")) {
    const listId = getCurrentToDoListId(e);
    deleteRequest(`api/todolists/${listId}`, "DELETE");
    deleteTaskList(e);
  } else if (e.target.classList.contains("js-delete-task-btn")) {
    const taskId = getCurrentTaskId(e);
    deleteRequest(`api/todolists/task/${taskId}`, "DELETE");
    deleteTask(e);
  } else if (e.target.classList.contains("js-add-task")) {
    const listId = getCurrentToDoListId(e);
    const taskInputValue = getClosestInputValue(e);
    postTask("api/todolists/task", "POST", {
      description: taskInputValue,
      toDoListId: listId
    });
    const apiData = await getToDoList("api/todolists");
    renderHandler(apiData);
  }
};

const addListenerToTaskList = () => {
  const taskListRenderTarget = getTaskListRenderTarget();
  taskListRenderTarget.addEventListener("click", e => {
    taskListBtnHandler(e);
  });
};
