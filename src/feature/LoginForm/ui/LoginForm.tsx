import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { MainInput } from "@/entities/MainInput";
import { MainButton } from "@/entities/MainButton";
import { LoginFormData } from "../model/types";
import { loginFormValid } from "../utils/validation";
import styles from "./styles.module.scss";
// import { useSession } from "next-auth/react";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      login: "",
      password: "",
    },
    resolver: yupResolver(loginFormValid),
  });

  const formSubmit = (data: LoginFormData) => {
    console.log(data);
  };

  // const { data: session, status } = useSession();

  // console.log(session);

  return (
    <form onSubmit={handleSubmit(formSubmit)} className={styles.form}>
      <div>
        <div className={styles.form__element}>
          <MainInput
            placeholder={"Login"}
            errors={errors.login?.message}
            {...register("login", { required: true })}
          />
        </div>
        <div className={styles.form__element}>
          <MainInput
            placeholder={"Пароль"}
            errors={errors.password?.message}
            {...register("password", { required: true })}
          />
        </div>
        <MainButton type={"submit"} fullWidth text={"Войти"} />
      </div>
      <div></div>
      {/*<div>*/}
      {/*  <Link href="/signup">Зарегистрироваться</Link>*/}
      {/*  <Link href="/">Забыли пароль?</Link>*/}
      {/*</div>*/}
    </form>
  );
};
