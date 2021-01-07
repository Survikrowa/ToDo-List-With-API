import { useState } from "react";
import { LoginForm } from "./login/LoginForm";
import { forms } from "../../constants/forms";

export const FormContainer = () => {
  const [currentForm, setCurrentForm] = useState(forms.loginForm);

  return (
    <>
      {currentForm === forms.loginForm ? (
        <LoginForm handleFormChange={setCurrentForm} />
      ) : (
        "register form"
      )}
    </>
  );
};
