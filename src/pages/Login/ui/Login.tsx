"use client";

import { LoginSection } from "@/widgets/LoginSection/ui/LoginSection";
import { AuthTitle } from "@/entities/AuthTitle";
import styles from "./styles.module.scss";

export const Login = () => {
  return (
    <div className={styles.login}>
      <AuthTitle title={"Войти"} />
      <LoginSection />
    </div>
  );
};
