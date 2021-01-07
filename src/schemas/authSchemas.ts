import * as yup from 'yup'

export const loginSchema = yup.object().shape({
    login: yup.string().required().min(4).max(30).trim(),
    password: yup.string().min(6).max(30).matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*/)
})