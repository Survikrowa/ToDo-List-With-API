import { renderLogin, renderRegister } from "./renderModal";

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
};

const goToLoginBtnHandler = () => {
  const goToLoginBtn = getGoToLoginBtn();
  applyEventListener(goToLoginBtn, renderLogin, goToRegisterBtnHandler);
  addEventListenerToCloseBtn();
};

const applyEventListener = (element, functionToRender, functionToGo) => {
  if (element) {
    element.addEventListener("click", () => {
      render(functionToRender);
      functionToGo();
    });
  }
};

const render = functionName => {
  modal.innerHTML = "";
  modal.insertAdjacentHTML("beforeend", functionName());
};
goToRegisterBtnHandler();
