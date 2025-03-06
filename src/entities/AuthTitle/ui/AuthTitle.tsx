import Logo from "@/shared/assets/logo.svg";
import styles from "./styles.module.scss";

export const AuthTitle = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string | undefined;
}) => {
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
