import { useRef, type ChangeEvent } from "react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { MainTemplate } from "../../templates/Main";
import { useCycleContext } from "../../context/CycleContext/cycle-context";
import { CycleActionTypes } from "../../context/CycleReducer/cycle-action";
import { showNotification } from "../../models/Notifications/show-notification";

export function Settings() {
  const { dispatch } = useCycleContext();
  const inputWorkTime = useRef(null);
  const inputshortBreakTime = useRef(null);
  const inputLongBreakTime = useRef(null);

  function handleSaveChanges(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    const workTime = Number(inputWorkTime.current?.value);
    const shortBreakTime = Number(inputshortBreakTime.current?.value);
    const longBreakTime = Number(inputLongBreakTime.current?.value);

    dispatch({
      type: CycleActionTypes.CHANGE,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });

    showNotification.success("As configurações foram salvas");
  }
  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>
      <Container>
        <p style={{ textAlign: "center" }}>
          Modifique as configurações para tempo de foco, descanso curto e
          descanso longo.
        </p>
      </Container>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "3.2rem" }}
        onSubmit={handleSaveChanges}
      >
        <div>
          <Input
            type="number"
            label="Foco (min)"
            id="workTime"
            min={25}
            defaultValue={25}
            ref={inputWorkTime}
          />
        </div>
        <div>
          <Input
            type="number"
            label="Descanso curto (min)"
            id="shortBreakTime"
            min={5}
            defaultValue={5}
            ref={inputshortBreakTime}
          />
        </div>
        <div>
          <Input
            type="number"
            label="Descanso longo (min)"
            id="longBreakTime"
            min={15}
            defaultValue={15}
            ref={inputLongBreakTime}
          />
        </div>
        <Container>
          <Button variant="default">Salvar</Button>
        </Container>
      </form>
    </MainTemplate>
  );
}
