import { loginController, authorized } from "./fetchHandler";
import { navigate } from "./router";

const getLoginBtn = modal => {
  return modal.querySelector("#confirm-login-btn");
};

const getRegisterBtn = modal => {
  return modal.querySelector("#confirm-register-btn");
};

export const addEventListenerToLoginBtn = modal => {
  const loginBtn = getLoginBtn(modal);
  loginBtn.addEventListener("click", e => {
    e.preventDefault();
    loginController("Login", "POST");
    if (authorized === true) {
      navigate("/todolists");
    }
  });
};

export const addEventListenerToRegisterBtn = modal => {
  const registerBtn = getRegisterBtn(modal);
  registerBtn.addEventListener("click", e => {
    e.preventDefault();
    loginController("register", "POST");
  });
};
