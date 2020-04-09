import { apiController } from "./fetchHandler";

const getLoginBtn = modal => {
  return modal.querySelector("#confirm-login-btn");
};

const getRegisterBtn = modal => {
  return modal.querySelector("#confirm-register-btn");
};

export const addEventListenerToLoginBtn = modal => {
  const loginBtn = getLoginBtn(modal);
  loginBtn.addEventListener("click", () => {
    apiController("Login", "POST");
  });
};

export const addEventListenerToRegisterBtn = modal => {
  const registerBtn = getRegisterBtn(modal);
  registerBtn.addEventListener("click", () => {
    apiController("Register", "POST");
  });
};
