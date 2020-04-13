import { home } from "./home";
import { toDoLists } from "./toDoLists";

const routes = {
  "/": home,
  "/todolists": toDoLists
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];

export const navigate = path => {
  window.history.pushState({}, path, window.location.origin + path);
  rootDiv.innerHTML = routes[path];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
