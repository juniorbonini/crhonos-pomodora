import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Cycle } from "../../components/Cycle";
import { Input } from "../../components/Input";
import { TimerDisplay } from "../../components/TimerDisplay";
import { MainTemplate } from "../../templates/Main";

export function Home() {
  return (
    <MainTemplate>
      <Input label="Tarefa" id="task" placeholder="Task" />
      <Container>
        <TimerDisplay />
        <Cycle />
      </Container>
      <Container>
        <Button>Salvar</Button>
      </Container>
    </MainTemplate>
  );
}
