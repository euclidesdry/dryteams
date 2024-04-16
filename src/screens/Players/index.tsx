import { Container } from "./styles";
import { Header } from "../../components/Header/index";
import { Highlight } from "../../components/Highlight/index";
import { ButtonIcon } from "~components/ButtonIcon";

type PlayersProps = {};

export function Players({}: PlayersProps) {
  return (
    <Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />

      <ButtonIcon />
    </Container>
  );
}
