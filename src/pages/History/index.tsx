import styles from "./style.module.css";

import { TrashIcon } from "@phosphor-icons/react";
import { MainTemplate } from "../../templates/Main";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { useCycleContext } from "../../context/CycleContext/cycle-context";
import { formatDate } from "../../utils/formatDate/format-date";
import { getCycleStatus } from "../../utils/cycleStatus/cycle-status";
import { tr } from "date-fns/locale";

export function History() {
  const { state } = useCycleContext();
  const cycleType = {};
  return (
    <MainTemplate>
      <Container>
        <div className={styles.container}>
          <Heading>Histórico</Heading>
          <Button size="sm" variant="danger">
            <TrashIcon />
          </Button>
        </div>
      </Container>

      <Container>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th className={styles.thSort}>Tarefa ↕</th>
                <th className={styles.thSort}>Duração ↕</th>
                <th className={styles.thSort}>Data ↕</th>
                <th className={styles.thSort}>Status</th>
                <th className={styles.thSort}>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {state.cycles.map((cycle) => {
                const cycleType = {
                  workTime: "Foco",
                  shortBreakTime: "Descanso curto",
                  longBreakTime: "Descanso longo",
                };
                return (
                  <tr key={cycle.id}>
                    <td>{cycle.name}</td>
                    <td>{cycle.duration}</td>
                    <td>{formatDate(cycle.startDate)}</td>
                    <td>{getCycleStatus(cycle, state.activeCycle)}</td>
                    <td>{cycleType[cycle.type]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
