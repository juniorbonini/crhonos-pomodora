import { Container } from "../../components/Container";
import { Input } from "../../components/Input";
import { Menu } from "../../components/Menu";
import { TimerDisplay } from "../../components/TimerDisplay";

export function MainTemplate() {
  return (
    <>
      <Container>
        <Menu />
      </Container>
      <Container>
        <Input id="task" label="Tarefa" type="text" placeholder="Task" />
      </Container>
      <Container>
        <TimerDisplay />
      </Container>
    </>
  );
}
