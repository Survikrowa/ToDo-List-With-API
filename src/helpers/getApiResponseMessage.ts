export const getApiErrorMessage = (errorCode: number) => {
  let errorMessage;

  switch (errorCode) {
    case 500: {
      errorMessage = "Something went wrong with the server.";
      break;
    }
    default: {
      errorMessage = null;
    }
  }
  return errorMessage;
};
