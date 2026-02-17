import styles from "./style.module.css";

import type { HtmlTagsProps } from "../../types/HtmlTags/html-tags";

export function HtmlTags({ children }: HtmlTagsProps) {
  return <div className={styles.genericHtml}>{children}</div>;
}
