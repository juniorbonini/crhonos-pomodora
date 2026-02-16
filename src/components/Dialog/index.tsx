import { Button } from "../Button";
import styles from "./style.module.css";
import type { ToastContentProps } from "react-toastify";

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
  return (
    <>
      <div className={styles.container}>
        <p>{data}</p>
        <div className={styles.buttonContainer}>
          <Button onClick={() => closeToast(true)}>Confimar</Button>
          <Button variant="danger" onClick={() => closeToast(false)}>
            Cancelar
          </Button>
        </div>
      </div>
    </>
  );
}
