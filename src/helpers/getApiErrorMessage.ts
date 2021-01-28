export const getApiErrorMessage = (errorCode: number) => {
  let errorMessage;

  switch (errorCode) {
    case 500: {
      errorMessage = "There is no user with provided credentials";
      break;
    }
    default: {
      errorMessage = null;
    }
  }
  return errorMessage;
};
