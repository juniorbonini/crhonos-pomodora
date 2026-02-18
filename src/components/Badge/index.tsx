import styles from "./style.module.css";

import type { BadgeProps } from "../../types/Badge/badge";

export function Badge({ children, ...props }: BadgeProps) {
  return (
    <button className={styles.badge} {...props}>
      {children}
    </button>
  );
}
