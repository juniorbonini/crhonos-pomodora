import styles from "./style.module.css";
import type { ContainerProps } from "../../types/Container/container";

export function Container({ children }: ContainerProps) {
  return <div className={styles.container}>{children}</div>;
}
