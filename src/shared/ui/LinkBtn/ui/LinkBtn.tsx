import Link from "next/link";
import { LinkProps } from "next/dist/client/link";
import styles from "./styles.module.scss";

interface LinkBtnProps extends LinkProps {
  text: string;
}

export function LinkBtn({ text, ...linkProps }: LinkBtnProps) {
  return (
    <Link {...linkProps} className={styles.linkBtn}>
      {text}
    </Link>
  );
}
