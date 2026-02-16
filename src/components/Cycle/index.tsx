import styles from "./style.module.css";

export function Cycle() {
  return (
    <>
      <p style={{ textAlign: "center", marginBottom: 20 }}>Ciclos:</p>
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
    </>
  );
}
