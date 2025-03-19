import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MainButton, MainInput, LinkBtn } from "@/shared/ui";
import { LoginFormData } from "../model/types";
import { loginFormValid } from "../utils/validation";
import styles from "./styles.module.scss";
import { useLogin } from "../api/hooks/useLogin";
import { setToken } from "@/shared/utils/tokenTools";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginFormValid),
  });

  const { mutate: login } = useLogin();

  const formSubmit = (formData: LoginFormData) => {
    console.log(formData);
    login(formData, {
      onSuccess: ({ access_token }) => {
        setToken({ accessToken: access_token });
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
      <div className={styles.form__inputs}>
        <div className={styles.form__element}>
          <MainInput
            placeholder={"Email"}
            errors={errors.email?.message}
            {...register("email", { required: true })}
          />
        </div>
        <div className={styles.form__element}>
          <MainInput
            placeholder={"Пароль"}
            errors={errors.password?.message}
            {...register("password", { required: true })}
          />
        </div>
        <MainButton
          type={"submit"}
          fullWidth
          text={"Войти"}
          isPending={false}
        />
      </div>
      <div className={styles.form__footer}>
        <LinkBtn href={"/signup"} text={"Зарегистрироваться"} />
        <LinkBtn href={"/"} text={"Забыли пароль?"} />
      </div>
      <button onClick={() => console.log(123)}>1231231</button>
    </form>
  );
};
