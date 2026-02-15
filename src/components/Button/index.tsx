import styles from "./style.module.css";
import type { ButtonProps } from "../../types/Button/button";

export function Button({ children, size, variant, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[size]} ${styles[variant]}`}
    >
      {children}
      <span className={styles.rippleContainer} />
    </button>
  );
}
