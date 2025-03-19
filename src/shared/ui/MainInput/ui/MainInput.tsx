import { forwardRef } from "react";
import { IMainInputRef } from "../model/types";
import styles from "./styles.module.scss";

export const MainInput = forwardRef<HTMLInputElement, IMainInputRef>(
  function MainInput(
    { placeholder, name, errors, onBlur, onChange, required },
    ref
  ) {
    return (
      <>
        <input
          ref={ref}
          name={name}
          placeholder={placeholder}
          onBlur={onBlur}
          onChange={onChange}
          required={required}
          className={styles.input}
        />
        {errors && <span className={styles.error}>{errors}</span>}
      </>
    );
  }
);
