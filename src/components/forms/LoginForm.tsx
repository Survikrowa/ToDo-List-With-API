import { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schemas/authSchemas";
import { Button } from "../button/Button";
import { forms } from "../../constants/forms";
import styles from "./form.module.scss";
import { useAuthDispatch } from "../../hooks/auth";
import { fetcher } from "../../helpers/fetcher";
import { getApiResponseMessage } from "../../helpers/getApiResponseMessage";

type Inputs = {
  login: string;
  password: string;
};

type LoginFormProps = {
  handleFormChange: React.Dispatch<React.SetStateAction<string>>;
};

export const LoginForm = ({ handleFormChange }: LoginFormProps) => {
  const [error, setError] = useState<string | null>(null);
  const history = useHistory();
  const dispatch = useAuthDispatch();
  const { register, errors, handleSubmit } = useForm<Inputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = async ({ login, password }) => {
    try {
      const jWTLoginResponse = await fetcher(
        `${process.env.REACT_APP_API_URL}Login`,
        {
          requestOptions: {
            mode: "cors",
            credentials: "include",
            method: "POST",
          },
          body: {
            login,
            password,
          },
        }
      );
      if (jWTLoginResponse) {
        dispatch({ type: "addJWT", payload: jWTLoginResponse as string });
        history.push("/dashboard");
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div style={{ fontSize: "100px" }}>{error && error}</div>
      <label className={styles.label}>
        Username
        <input
          name="login"
          ref={register()}
          className={styles.input}
          type="text"
        />
        <span>{errors.login?.message}</span>
      </label>
      <label className={styles.label}>
        Password
        <input
          name="password"
          ref={register()}
          className={styles.input}
          type="password"
        />
        <span>{errors.password?.message}</span>
      </label>
      <div className={styles.buttonContainer}>
        <Button onClick={() => {}} type="submit">
          Log in
        </Button>
        <Button
          type="button"
          onClick={() => handleFormChange(forms.registerForm)}
        >
          Don't have an account? Register here!
        </Button>
      </div>
    </form>
  );
};
