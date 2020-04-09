import { getForm } from "./fetchHandler";

const removeError = form => {
  const error = form.querySelector(".error");
  if (error) {
    error.remove();
  }
};

const renderError = errorMessage => {
  return `<span class="error">${errorMessage}</span>`;
};

export const errorRenderHandler = errorMessage => {
  const form = getForm();
  removeError(form);
  form.insertAdjacentHTML("afterbegin", renderError(errorMessage));
};
