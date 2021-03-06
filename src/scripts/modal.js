import { renderLogin, renderRegister } from "./renderModal";
import {
  addEventListenerToLoginBtn,
  addEventListenerToRegisterBtn
} from "./form";

export const getModal = () => {
  return document.querySelector("#js-modal");
};

const getOpenModalBtn = () => {
  return document.querySelector("#js-turn-modal");
};

const getCloseModalBtn = () => {
  const modal = getModal();
  return modal.querySelector("#close-btn");
};

const getGoToLoginBtn = () => {
  const modal = getModal();
  return modal.querySelector("#js-Go-login");
};

const getGoToRegBtn = () => {
  const modal = getModal();
  return modal.querySelector("#js-Go-register");
};

const addEventListenerToCloseBtn = () => {
  const modal = getModal();
  const closeModalBtn = getCloseModalBtn();
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      modal.close();
    });
  }
};

const addEventListenerToOpenBtn = () => {
  const modal = getModal();
  const modalTurnBtn = getOpenModalBtn();
  if (modalTurnBtn) {
    modalTurnBtn.addEventListener("click", () => {
      modal.showModal();
    });
  }
};

export const goToRegisterBtnHandler = () => {
  const modal = getModal();
  const goToRegisterBtn = getGoToRegBtn();
  applyEventListener(goToRegisterBtn, renderRegister, goToLoginBtnHandler);
  addEventListenerToCloseBtn();
  addEventListenerToLoginBtn(modal);
  addEventListenerToOpenBtn();
};

const goToLoginBtnHandler = () => {
  const modal = getModal();
  const goToLoginBtn = getGoToLoginBtn();
  applyEventListener(goToLoginBtn, renderLogin, goToRegisterBtnHandler);
  addEventListenerToCloseBtn();
  addEventListenerToRegisterBtn(modal);
};

const listenerFunction = (callbackRender, callback) => {
  render(callbackRender);
  callback();
};

const applyEventListener = (element, callbackRender, callback) => {
  if (element) {
    element.addEventListener(
      "click",
      listenerFunction.bind(this, callbackRender, callback)
    );
  }
};

const render = functionName => {
  const modal = getModal();
  modal.innerHTML = "";
  modal.insertAdjacentHTML("beforeend", functionName());
};
