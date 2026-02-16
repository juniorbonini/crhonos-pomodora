import { FloppyDiskBackIcon } from "@phosphor-icons/react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Cycle } from "../../components/Cycle";
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
      <Container>
        <Cycle />
        <Button size="md">
          <FloppyDiskBackIcon />
        </Button>
      </Container>
    </>
  );
}
