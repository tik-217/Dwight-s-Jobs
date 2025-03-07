import { FC } from "react";
import { MainButtonProps } from "../model/type";
import styles from "./styles.module.scss";
import clsx from "clsx";

export const MainButton: FC<MainButtonProps> = ({ type, fullWidth, text }) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, fullWidth && styles.button_fullWidth)}
    >
      {text}
    </button>
  );
};
