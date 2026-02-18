import styles from "./style.module.css";
import {
  CoffeeIcon,
  CheckCircleIcon,
  ClockIcon,
  MoonIcon,
  TargetIcon,
  XCircleIcon,
} from "@phosphor-icons/react";
import type { CycleCardProps } from "../../types/CycleCard/cycle-card";

export function CycleCard({
  name,
  status = "Em andamento",
  startDate,
  duration,
  type,
}: CycleCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <strong className={styles.name}>{name}</strong>
        {type === "Foco" && (
          <div className={styles.type}>
            <TargetIcon size={20} /> <strong>Foco</strong>
          </div>
        )}
        {type === "Descanso curto" && (
          <div className={styles.type}>
            <CoffeeIcon size={20} /> <strong>Descanso curto</strong>
          </div>
        )}

        {type === "Descanso longo" && (
          <div className={styles.type}>
            <MoonIcon size={20} /> <strong>Descanso longo</strong>
          </div>
        )}
      </div>

      <div className={styles.footer}>
        <div className={styles.meta}>
          <span className={styles.startDate}>{startDate}</span>
          <span className={styles.duration}>{duration} minutos</span>
        </div>
        <div
          className={`${styles.badge} ${
            status === "Em andamento"
              ? styles.pending
              : status === "Concluído"
                ? styles.completed
                : styles.interrupted
          }`}
        >
          {status === "Em andamento" && <ClockIcon size={20} />}
          {status === "Concluído" && <CheckCircleIcon size={20} />}
          {status === "Interrompido" && <XCircleIcon size={20} />}
          <span>{status}</span>
        </div>
      </div>
    </div>
  );
}
