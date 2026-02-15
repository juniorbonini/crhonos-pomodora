import styles from "./style.module.css";
import type { ButtonProps } from "../../types/Button/button";

export function Button({ children, size, variant }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[size]} ${styles[variant]}`}>
      {children}
    </button>
  );
}
