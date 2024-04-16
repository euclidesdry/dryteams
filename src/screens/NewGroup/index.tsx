import { Header } from "~components/Header";
import { Highlight } from "../../components/Highlight/index";
import { Button } from "~components/Button";

import { Container, Content, Icon } from "./styles";
import { Input } from "~components/Input";

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

        <Input />

        <Button title="Criar nova turma" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
