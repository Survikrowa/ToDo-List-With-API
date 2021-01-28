import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { Button } from "../button/Button";
import { forms } from "../../constants/forms";
import { registerSchema } from "../../schemas/authSchemas";
import styles from "./form.module.scss";
import { getApiResponseMessage } from "../../helpers/getApiResponseMessage";
import { fetcher } from "../../helpers/fetcher";

type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  password: string;
};

type RegisterFormProps = {
  handleFormChange: React.Dispatch<React.SetStateAction<string>>;
};

export const RegisterForm = ({ handleFormChange }: RegisterFormProps) => {
  const { register, errors, handleSubmit } = useForm<Inputs>({
    resolver: yupResolver(registerSchema),
  });
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const apiUserRegisterResponse = await fetcher(
        `${process.env.REACT_APP_API_URL}Register`,
        {
          requestOptions: {
            mode: "cors",
            credentials: "include",
            method: "POST",
          },
          body: {
            user: {
              ...data,
            },
          },
        }
      );
      if (apiUserRegisterResponse) {
        setMessage("Account created! You can now log in.");
        setError(null);
      }
    } catch (error) {
      const errorMessage = getApiResponseMessage(error);
      setError(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <span>{error && error}</span>
      <span>{message}</span>
      <label className={styles.label}>
        First name
        <input
          name="firstName"
          ref={register()}
          className={styles.input}
          type="text"
        />
        <span>{errors.firstName?.message}</span>
      </label>
      <label className={styles.label}>
        Last name
        <input
          name="lastName"
          ref={register()}
          className={styles.input}
          type="text"
        />
        <span>{errors.lastName?.message}</span>
      </label>
      <label className={styles.label}>
        email
        <input
          name="email"
          ref={register()}
          className={styles.input}
          type="email"
        />
        <span>{errors.email?.message}</span>
      </label>
      <label className={styles.label}>
        login
        <input
          name="login"
          ref={register()}
          className={styles.input}
          type="text"
        />
        <span>{errors.login?.message}</span>
      </label>
      <label className={styles.label}>
        password
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
          Register
        </Button>
        <Button type="button" onClick={() => handleFormChange(forms.loginForm)}>
          Back to login
        </Button>
      </div>
    </form>
  );
};
