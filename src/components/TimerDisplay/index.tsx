import { useCycleContext } from "../../context/CycleContext/cycle-context";
import { Container } from "../Container";
import styles from "./style.module.css";

export function TimerDisplay() {
  const { state } = useCycleContext();
  return (
    <Container>
      <p className={styles.container}>{state.formattedSecondsRemaining}</p>
    </Container>
  );
}
