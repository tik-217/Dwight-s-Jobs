import { FC } from "react";
import { MainButtonProps } from "../model/type";
import styles from "./styles.module.scss";

export const MainButton: FC<MainButtonProps> = ({ type }) => {
  return (
    <button type={type} className={styles.button}>
      Войти
    </button>
  );
};
