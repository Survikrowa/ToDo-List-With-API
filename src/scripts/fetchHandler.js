import { errorRenderHandler } from "./renderErrors";

const modal = document.querySelector("#js-modal");

export let authorized = false;

export const getForm = () => {
  return document.querySelector("#js-form");
};

export const loginController = (url, fetchMethod) => {
  const form = getForm();
  const formElements = Array.from(form.elements)
    .filter(el => el.name)
    .map(el => ({ [el.name]: el.value }))
    .reduce((acc, el) => ({ user: { ...acc.user, ...el } }), { user: {} });
  //.reduce((acc, el) => Object.assign(acc, el), {});
  console.log(formElements);
  //console.log(sendApiRequest(url, formElements, fetchMethod));
};

async function sendApiRequest(url, data, fetchMethod) {
  try {
    const response = await fetch(`http://localhost:5001/${url}`, {
      method: fetchMethod,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!response.ok) {
      throw "Podano błędne dane";
    } else {
      authorized = true;
    }
    return response.json();
  } catch (error) {
    errorRenderHandler(error);
  }
}
