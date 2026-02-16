import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { MainTemplate } from "../../templates/Main";

export function Settings() {
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
      <form style={{ display: "flex", flexDirection: "column", gap: "3.2rem" }}>
        <div>
          <Input type="number" label="Foco (min)" id="workTime" />
        </div>
        <div>
          <Input
            type="number"
            label="Descanso curto (min)"
            id="shortBreakTime"
          />
        </div>
        <div>
          <Input
            type="number"
            label="Descanso longo (min)"
            id="longBreakTime"
          />
        </div>
        <Container>
          <Button>Salvar</Button>
        </Container>
      </form>
    </MainTemplate>
  );
}
