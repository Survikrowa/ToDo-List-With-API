const API_URL = "http://localhost:5001";

export const getForm = () => {
  return document.querySelector("#js-form");
};

const getMappedFormElements = () => {
  const form = getForm();
  return Array.from(form.elements)
    .filter(el => el.name)
    .map(el => ({ [el.name]: el.value }))
    .reduce((acc, el) => Object.assign(acc, el), {});
};
let apiResponse;

export const loginController = async url => {
  const formElements = getMappedFormElements();
  apiResponse = await sendApiRequest(url, {
    method: "POST",
    data: formElements
  });
  return apiResponse;
};

export const registerController = async url => {
  const formElements = getMappedFormElements();
  return sendApiRequest(url, {
    method: "POST",
    data: { user: formElements }
  });
};

export const deleteRequest = url => {
  sendApiRequestWithToken(url, apiResponse, { method: "DELETE" });
};

export const postToDoList = async (url, listName) => {
  await sendApiRequestWithToken(url, apiResponse, {
    method: "POST",
    data: {
      name: listName,
      tasks: [],
      ownerId: 1,
      status: true
    }
  });
};

export const getToDoList = url => {
  return sendApiRequestWithToken(url, apiResponse, { headers: {} });
};

export const postTask = (url, data) => {
  sendApiRequestWithToken(url, apiResponse, {
    method: "POST",
    data: data,
    headers: {}
  });
};

async function sendApiRequestWithToken(url, token, options) {
  return sendApiRequest(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`
    }
  });
}

async function sendApiRequest(
  url,
  { method = "GET", data = undefined, headers = {} } = {}
) {
  const res = await fetch(`${API_URL}/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers
    },
    body: JSON.stringify(data)
  });
  if (!res.ok) {
    throw await getJSON(res);
  }
  return getJSON(res);
}

async function getJSON(res) {
  const contentType = res.headers.get("Content-Type");
  const emptyCodes = [204, 205];

  if (
    !emptyCodes.includes(res.status) &&
    contentType &&
    contentType.includes("json")
  ) {
    return res.json();
  } else {
    return;
  }
}
