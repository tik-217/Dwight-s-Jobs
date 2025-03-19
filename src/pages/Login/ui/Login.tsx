"use client";

import { LoginSection } from "@/widgets";
import styles from "./styles.module.scss";

export const Login = () => {
  return (
    <div className={styles.login}>
      <LoginSection />
    </div>
  );
};
