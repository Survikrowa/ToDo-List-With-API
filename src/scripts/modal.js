import { renderLogin, renderRegister } from "./renderModal";
import {
  addEventListenerToLoginBtn,
  addEventListenerToRegisterBtn
} from "./form";

const modalTurnBtn = document.querySelector("#js-turn-modal");
const modal = document.querySelector("#js-modal");

const getCloseModalBtn = () => {
  return modal.querySelector("#close-btn");
};

const getGoToLoginBtn = () => {
  return modal.querySelector("#js-Go-login");
};

const getGoToRegBtn = () => {
  return modal.querySelector("#js-Go-register");
};

modalTurnBtn.addEventListener("click", () => {
  modal.showModal();
});

const addEventListenerToCloseBtn = () => {
  const closeModalBtn = getCloseModalBtn();
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.close();
    });
  }
};

const goToRegisterBtnHandler = () => {
  const goToRegisterBtn = getGoToRegBtn();
  applyEventListener(goToRegisterBtn, renderRegister, goToLoginBtnHandler);
  addEventListenerToCloseBtn();
  addEventListenerToLoginBtn(modal);
};

const goToLoginBtnHandler = () => {
  const goToLoginBtn = getGoToLoginBtn();
  applyEventListener(goToLoginBtn, renderLogin, goToRegisterBtnHandler);
  addEventListenerToCloseBtn();
  addEventListenerToRegisterBtn(modal);
};

const listenerFunction = (functionToRender, functionToGo) => {
  render(functionToRender);
  functionToGo();
};

const applyEventListener = (element, functionToRender, functionToGo) => {
  if (element) {
    element.addEventListener(
      "click",
      listenerFunction.bind(this, functionToRender, functionToGo)
    );
  }
};

const render = functionName => {
  modal.innerHTML = "";
  modal.insertAdjacentHTML("beforeend", functionName());
};
goToRegisterBtnHandler();
