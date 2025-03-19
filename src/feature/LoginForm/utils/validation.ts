import * as yup from "yup";

export const loginFormValid = yup
  .object({
    email: yup
      .string()
      .email("Введите email")
      .required("Поле обязательно для заполнения"),
    password: yup.string().required("Поле обязательно для заполнения"),
  })
  .required();
