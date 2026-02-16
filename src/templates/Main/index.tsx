import { Container } from "../../components/Container";
import { Menu } from "../../components/Menu";
import { Footer } from "../../components/Footer";
import type { MainTemplateProps } from "../../types/Main/main-template";

export function MainTemplate({ children }: MainTemplateProps) {
  return (
    <>
      <Container>
        <Menu />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </>
  );
}
