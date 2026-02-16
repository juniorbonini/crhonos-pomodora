import styles from "./style.module.css";

import { TrashIcon } from "@phosphor-icons/react";
import { MainTemplate } from "../../templates/Main";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";

export function History() {
  return (
    <MainTemplate>
      <Container>
        <div className={styles.container}>
          <h1>Histórico</h1>
          <Button size="sm" variant="danger">
            <TrashIcon />
          </Button>
        </div>
      </Container>

      <Container>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th className={styles.thSort}>Tarefa ↕</th>
                <th className={styles.thSort}>Duração ↕</th>
                <th className={styles.thSort}>Data ↕</th>
                <th className={styles.thSort}>Status</th>
                <th className={styles.thSort}>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Estudar</td>
                <td>25 minutos</td>
                <td>15/01/2026</td>
                <td>Em andamento</td>
                <td>Foco</td>
              </tr>
              <tr>
                <td>Estudar</td>
                <td>25 minutos</td>
                <td>15/01/2026</td>
                <td>Em andamento</td>
                <td>Foco</td>
              </tr>
              <tr>
                <td>Estudar</td>
                <td>25 minutos</td>
                <td>15/01/2026</td>
                <td>Em andamento</td>
                <td>Foco</td>
              </tr>
              <tr>
                <td>Estudar</td>
                <td>25 minutos</td>
                <td>15/01/2026</td>
                <td>Em andamento</td>
                <td>Foco</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
