import styles from "./style.module.css";

import type { HeadingProps } from "../../types/Heading/heading";

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
