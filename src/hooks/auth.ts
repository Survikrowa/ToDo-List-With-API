import { useContext } from "react";
import { AuthStateContext, AuthDispatchContext } from "../context/authContext";

const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within AuthProvider");
  }
  return context;
};

const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within AuthProvider");
  }
  return context;
};

export { useAuthDispatch, useAuthState };
