import { home } from "./home";
import { toDoLists } from "./toDoLists";
import { goToRegisterBtnHandler } from "./modal";
import { toDoListsHandler } from "./toDoListsHandler";

const routes = {
  "/": { view: home, onEnter: goToRegisterBtnHandler },
  "/todolists": { view: toDoLists, onEnter: toDoListsHandler }
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname].view;
routes[window.location.pathname].onEnter();

export const navigate = path => {
  window.history.pushState({}, path, window.location.origin + path);
  rootDiv.innerHTML = routes[path].view;
  routes[window.location.pathname].onEnter();
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname].view;
};
