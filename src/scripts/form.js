import { loginController, registerController } from "./fetchHandler";
import { navigate } from "./router";
import { getModal } from "./modal";
const getLoginBtn = modal => {
  return modal.querySelector("#confirm-login-btn");
};

const getRegisterBtn = modal => {
  return modal.querySelector("#confirm-register-btn");
};

export const addEventListenerToLoginBtn = modal => {
  const loginBtn = getLoginBtn(modal);
  loginBtn.addEventListener("click", async e => {
    e.preventDefault();
    const apiData = await loginController("Login", "POST");

    if (!apiData.errors) {
      navigate("/todolists");
    }
  });
};

export const addEventListenerToRegisterBtn = modal => {
  const registerBtn = getRegisterBtn(modal);
  registerBtn.addEventListener("click", async e => {
    e.preventDefault();
    const apiData = await registerController("Register", "POST");
    if (!apiData.errors) {
      const modal = getModal();
      modal.close();
    }
  });
};
