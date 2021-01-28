import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { forms } from "../../constants/forms";
import { RegisterForm } from "./RegisterForm";

export const FormContainer = () => {
  const [currentForm, setCurrentForm] = useState(forms.loginForm);

  return (
    <>
      {currentForm === forms.loginForm ? (
        <LoginForm handleFormChange={setCurrentForm} />
      ) : (
        <RegisterForm handleFormChange={setCurrentForm} />
      )}
    </>
  );
};
