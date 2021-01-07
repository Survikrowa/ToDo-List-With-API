import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../../schemas/authSchemas";
import { Button } from "../../button/Button";
import { forms } from "../../../constants/forms";

type Inputs = {
  login: string;
  password: string;
};

type LoginFormProps = {
  handleFormChange: React.Dispatch<React.SetStateAction<string>>;
};

export const LoginForm = ({ handleFormChange }: LoginFormProps) => {
  const { register, errors, handleSubmit } = useForm<Inputs>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Username
        <input name="login" ref={register()} />
        <span>{errors.login?.message}</span>
      </label>
      <label>
        Password
        <input name="password" ref={register()} />
        <span>{errors.password?.message}</span>
      </label>
      <div>
        <Button type="submit">Log in</Button>
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
