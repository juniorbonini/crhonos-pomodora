import styles from "./style.module.css";
import type { InputProps } from "../../types/Input/input";

export function Input({ id, label, type, ...props }: InputProps) {
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        className={styles.input}
        placeholder="Nome da tarefa"
        {...props}
      />
    </div>
  );
}
