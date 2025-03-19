"use client";

import { FC } from "react";
import clsx from "clsx";
import { MainButtonProps } from "../model/type";
import styles from "./styles.module.scss";

export const MainButton: FC<MainButtonProps> = ({
  type,
  fullWidth,
  text,
  isPending,
}) => {
  return (
    <button
      type={type}
      className={clsx(styles.button, fullWidth && styles.button_fullWidth)}
    >
      {isPending ? <div className={styles.button__loader}></div> : text}
    </button>
  );
};
