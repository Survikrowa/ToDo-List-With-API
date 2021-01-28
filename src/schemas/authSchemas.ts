import * as yup from "yup";

export const loginSchema = yup.object().shape({
  login: yup.string().required().min(4).max(30).trim(),
  password: yup.string().min(6).max(30),
});

export const registerSchema = yup.object().shape({
  firstName: yup.string().required().max(30),
  lastName: yup.string().required().max(30),
  email: yup.string().email().required().trim(),
  login: yup.string().required().min(4).max(30).trim(),
  password: yup
    .string()
    .min(6)
    .max(30)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*/,
      "Password must contain, one uppercase, one number and one special character"
    ),
});
