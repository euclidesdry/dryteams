import { Container, Form } from "./styles";
import { Header } from "../../components/Header/index";
import { Highlight } from "../../components/Highlight/index";
import { ButtonIcon } from "~components/ButtonIcon";
import { Input } from "../../components/Input/index";
import { Filter } from "../../components/Filter/index";

type PlayersProps = {};

export function Players({}: PlayersProps) {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>

      <Filter title="Time A" isActive />
      <Filter title="Time B" />
    </Container>
  );
}
