import styles from "./style.module.css";
import { Heading } from "../Heading";

export function EmptyComponent() {
  return (
    <div className={styles.container}>
      <Heading>Nenhum ciclo regisrado</Heading>
    </div>
  );
}
