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
import { Badge } from "../../components/Badge";
import { CycleCard } from "../../components/CycleCard";
import { getCycleType } from "../../utils/cycleType/cycle-type";
import { FlatList } from "../../components/FlatList";
import { EmptyComponent } from "../../components/EmptyComponent";

export function History() {
  const { state, dispatch } = useCycleContext();
  const [confirmClearHistory, setConfirmClearHistory] = useState(false);
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
        <div className={styles.badgeContainer}>
          <Badge onClick={() => handleSortCycle({ field: "name" })}>
            <p>Tarefa</p>
          </Badge>
          <Badge onClick={() => handleSortCycle({ field: "duration" })}>
            <p>Duração</p>
          </Badge>
          <Badge onClick={() => handleSortCycle({ field: "startDate" })}>
            <p>Data</p>
          </Badge>
          <Badge>
            <p>Status</p>
          </Badge>
          <Badge onClick={() => handleSortCycle({ field: "type" })}>
            <p>Tipo</p>
          </Badge>
        </div>
      </Container>

      <Container>
        {state.cycles.length === 0 ? (
          <EmptyComponent />
        ) : (
          <FlatList
            data={sortCycleOptions.cycles}
            keyExtractor={(cycle) => cycle.id}
            renderItem={(cycle) => (
              <div className={styles.flatLisContent}>
                <CycleCard
                  name={cycle.name}
                  duration={cycle.duration}
                  startDate={formatDate(cycle.startDate)}
                  status={getCycleStatus(cycle, state.activeCycle)}
                  type={getCycleType(cycle.type)}
                />
              </div>
            )}
          />
        )}
      </Container>
    </MainTemplate>
  );
}
