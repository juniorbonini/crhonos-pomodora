import { useRef, type ChangeEvent } from "react";
import { useCycleContext } from "../../context/CycleContext/cycle-context";
import { Button } from "../Button";
import { Container } from "../Container";
import { Input } from "../Input";
import { TimerDisplay } from "../TimerDisplay";
import { Tips } from "../Tips";
import { getNextCycle } from "../../utils/getNextCycle/get-next-cylcle";
import { getNextCycleType } from "../../utils/getNextCycle/get-next-cycle-type";
import { CycleActionTypes } from "../../context/CycleReducer/cycle-action";
import { Cycles } from "../Cycle";
import type { Cycle } from "../../models/Cycles/cycle";
import { PlayCircleIcon, StopCircleIcon } from "@phosphor-icons/react";

export function Form() {
  const { state, dispatch } = useCycleContext();
  const inputValue = useRef(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const getCycleType = getNextCycleType(nextCycle);
  const lastCycleName = state.cycles[state.cycles.length - 1]?.name || "";

  function create(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!inputValue.current) return;

    const cycleName = inputValue.current.value;
    if (!cycleName) {
      alert("Insira o nome da tarefa");
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
    alert("Tarefa iniciada");
  }

  function handleInterrupt() {
    dispatch({ type: CycleActionTypes.INTERRUPT });
    alert("Ciclo interrompido");
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
        <Tips />
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
