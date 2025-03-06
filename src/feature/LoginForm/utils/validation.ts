import * as yup from "yup";

export const loginFormValid = yup
  .object({
    login: yup.string().required("Поле обязательно для заполнения"),
    password: yup.string().required("Поле обязательно для заполнения"),
  })
  .required();
