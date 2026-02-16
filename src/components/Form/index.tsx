import { Button } from "../Button";
import { Container } from "../Container";
import { Cycle } from "../Cycle";
import { Input } from "../Input";
import { TimerDisplay } from "../TimerDisplay";

export function Form() {
  return (
    <form>
      <Container>
        <Input
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
        <Cycle />
      </Container>
      <Container>
        <Button>Iniciar</Button>
      </Container>
    </form>
  );
}
