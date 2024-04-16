import { Header } from "~components/Header";
import { Highlight } from "../../components/Highlight/index";
import { Button } from "~components/Button";

import { Container, Content, Icon } from "./styles";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Button title="Criar nova turma" />
      </Content>
    </Container>
  );
}
