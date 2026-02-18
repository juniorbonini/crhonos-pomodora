import { useRef, type ChangeEvent } from "react";
import { useCycleContext } from "../../context/CycleContext/cycle-context";
import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { TimerDisplay } from "../TimerDisplay";
import { getNextCycle } from "../../utils/getNextCycle/get-next-cylcle";
import { getNextCycleType } from "../../utils/getNextCycle/get-next-cycle-type";
import { CycleActionTypes } from "../../context/CycleReducer/cycle-action";
import { Cycles } from "../Cycle";
import type { Cycle } from "../../models/Cycles/cycle";
import { PlayCircleIcon, StopCircleIcon } from "@phosphor-icons/react";
import { showNotification } from "../../models/Notifications/show-notification";

export function Form() {
  const { state, dispatch } = useCycleContext();
  const inputValue = useRef<HTMLInputElement>(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const getCycleType = getNextCycleType(nextCycle);
  const lastCycleName = state.cycles[state.cycles.length - 1]?.name || "";

  function create(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!inputValue.current) return;

    const cycleName = inputValue.current.value;
    if (!cycleName) {
      showNotification.warn("Insira um nome para o ciclo");
      return;
    }

    const newCycle: Cycle = {
      id: Math.random().toString(36).substring(2, 9),
      name: cycleName,
      startDate: Date.now(),
      interruptDate: null,
      completeDate: null,
      duration: state.config[getCycleType],
      type: getCycleType,
    };

    dispatch({ type: CycleActionTypes.START, payload: newCycle });
    showNotification.success("Ciclo iniciado");
  }

  function handleInterrupt() {
    dispatch({ type: CycleActionTypes.INTERRUPT });
    showNotification.error("Ciclo interrompido");
  }

  return (
    <form onSubmit={create}>
      <Container>
        <Input
          ref={inputValue}
          defaultValue={lastCycleName}
          disabled={!!state.activeCycle}
          type="text"
          id="task"
          label="Tarefa"
          min={6}
          placeholder="Nome da tarefa"
        />
      </Container>
      <Container>
        <TimerDisplay />
      </Container>
      <Container>
        {state.cycles.length > 0 && (
          <div>
            <Cycles />
          </div>
        )}
      </Container>
      <Container>
        {!state.activeCycle && (
          <Button>
            <PlayCircleIcon />
          </Button>
        )}
        {!!state.activeCycle && (
          <Button variant="danger" onClick={handleInterrupt}>
            <StopCircleIcon />
          </Button>
        )}
      </Container>
    </form>
  );
}
