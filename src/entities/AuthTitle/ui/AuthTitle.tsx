import Logo from "@/shared/assets/logo.svg";
import { AuthTitleProps } from "../model/types";
import styles from "./styles.module.scss";

export const AuthTitle = ({ title, subtitle }: AuthTitleProps) => {
  return (
    <section className={styles.authTitle}>
      <div className={styles.authTitle__img}>
        <Logo />
      </div>
      <h2 className={styles.authTitle__title}>{title}</h2>
      {subtitle && <span>{subtitle}</span>}
    </section>
  );
};
