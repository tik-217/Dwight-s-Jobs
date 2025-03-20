import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import { MainButton, MainInput, LinkBtn } from "@/shared/ui";
import { LoginFormData } from "../model/types";
import { loginFormValid } from "../utils/validation";
import { useLogin } from "../api/hooks/useLogin";
import styles from "./styles.module.scss";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(loginFormValid),
  });

  const router = useRouter();
  const { mutate: login, isPending } = useLogin();

  const formSubmit = (formData: LoginFormData) => {
    login(formData, {
      onSuccess: () => router.push("/"),
      onError: () => {
        setError("root", {
          type: "server",
          message: "Неправильный логин или пароль",
        });
      },
    });
  };

  return (
    <>
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
            isPending={isPending}
          />
          <span className={styles.form__error}>{errors.root?.message}</span>
        </div>
        <div className={styles.form__footer}>
          <LinkBtn href={"/signup"} text={"Зарегистрироваться"} />
          <LinkBtn href={"/"} text={"Забыли пароль?"} />
        </div>
      </form>
    </>
  );
};
