import { LoginForm } from "@/feature/LoginForm";
import { AuthTitle } from "@/entities/AuthTitle";

export const LoginSection = () => {
  return (
    <>
      <AuthTitle title={"Войти"} />
      <LoginForm />
    </>
  );
};
