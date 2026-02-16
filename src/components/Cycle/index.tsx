import styles from "./style.module.css";

export function Cycle() {
  return (
    <div className={styles.container}>
      <div className={`${styles.cycle} ${styles.workTime}`}></div>
      <div className={`${styles.cycle} ${styles.shortBreakTime}`}></div>
      <div className={`${styles.cycle} ${styles.workTime}`}></div>
      <div className={`${styles.cycle} ${styles.shortBreakTime}`}></div>
      <div className={`${styles.cycle} ${styles.workTime}`}></div>
      <div className={`${styles.cycle} ${styles.shortBreakTime}`}></div>
      <div className={`${styles.cycle} ${styles.workTime}`}></div>
      <div className={`${styles.cycle} ${styles.longBreakTime}`}></div>
    </div>
  );
}
