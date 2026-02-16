import styles from "./style.module.css";

export function Footer() {
  return (
    <footer className={styles.container}>
      <a href="/pomodoro">Entenda como funciona a técnica Pomodoro ❤️</a>
      <a href="/">Chornos Pomodora {new Date().getFullYear()} feito com 💚</a>
    </footer>
  );
}
