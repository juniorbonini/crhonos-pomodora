/* eslint-disable react-hooks/set-state-in-effect */
import styles from "./style.module.css";

import { TrashIcon } from "@phosphor-icons/react";
import { MainTemplate } from "../../templates/Main";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { useCycleContext } from "../../context/CycleContext/cycle-context";
import { formatDate } from "../../utils/formatDate/format-date";
import { getCycleStatus } from "../../utils/cycleStatus/cycle-status";
import { useEffect, useState } from "react";
import type { SortCycleProps } from "../../types/SortCycle/sort-cycle";
import { sortCycles } from "../../utils/sortCycle/sort-cycle";
import { CycleActionTypes } from "../../context/CycleReducer/cycle-action";
import { showNotification } from "../../models/Notifications/show-notification";

export function History() {
  const { state, dispatch } = useCycleContext();
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
  const hasCycles = state.cycles.length > 0;
  const [sortCycleOptions, setSortCycleOptions] = useState<SortCycleProps>(
    () => {
      return {
        cycles: sortCycles({ cycles: state.cycles }),
        field: "startDate",
        direction: "desc",
      };
    },
  );
  useEffect(() => {
    setSortCycleOptions((prev) => ({
      ...prev,
      fiedl: prev.field,
      direction: prev.direction,
    }));
  }, [state.cycles]);

  useEffect(() => {
    if (!confirmClearHistory) return;
    setConfirmClearHistory(false);

    dispatch({ type: CycleActionTypes.RESET });
  }, [confirmClearHistory, dispatch]);

  useEffect(() => {
    return () => {
      showNotification.dimiss();
    };
  }, []);

  function handleSortCycle({ field }: Pick<SortCycleProps, "field">) {
    const newDirection = sortCycleOptions.direction === "desc" ? "asc" : "desc";

    setSortCycleOptions({
      cycles: sortCycles({
        direction: newDirection,
        field,
        cycles: sortCycleOptions.cycles,
      }),
      direction: newDirection,
      field,
    });
  }

  function handleResetHistory() {
    showNotification.dimiss();

    if (state.activeCycle !== null) {
      showNotification.warning(
        "Você não pode resetar o histórico quando há um ciclo ativo, termine ou interrompa o ciclo",
      );
      return;
    }
    showNotification.confirm(
      "Você tem certeza que quer resetar o histórico?",
      (confirmation) => setConfirmClearHistory(confirmation),
    );
  }
  return (
    <MainTemplate>
      <Container>
        <div className={styles.container}>
          <Heading>Histórico</Heading>
          <Button size="sm" variant="danger" onClick={handleResetHistory}>
            <TrashIcon />
          </Button>
        </div>
      </Container>

      <Container>
        {hasCycles ? (
          <div className={styles.table}>
            <table>
              <thead>
                <tr>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortCycle({ field: "name" })}
                  >
                    Tarefa ↕
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortCycle({ field: "duration" })}
                  >
                    Duração ↕
                  </th>
                  <th
                    className={styles.thSort}
                    onClick={() => handleSortCycle({ field: "startDate" })}
                  >
                    Data ↕
                  </th>
                  <th className={styles.thSort}>Status</th>
                  <th className={styles.thSort}>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortCycleOptions.cycles.map((cycle) => {
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
        ) : (
          <div>
            <Heading>Não há ciclos registrados</Heading>
          </div>
        )}
      </Container>
    </MainTemplate>
  );
}
