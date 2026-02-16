import styles from "./style.module.css";
import type { ButtonProps } from "../../types/Button/button";

export function Button({
  children,
  size = "md",
  variant,
  onClick,
}: ButtonProps) {
  return (
    <div className={styles.container}>
      <button
        onClick={onClick}
        className={`${styles.button} ${styles[size]} ${styles[variant]}`}
      >
        {children}
        <span className={styles.rippleContainer} />
      </button>
    </div>
  );
}
