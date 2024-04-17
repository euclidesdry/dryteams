import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Header } from "../../components/Header/index";
import { Highlight } from "../../components/Highlight/index";
import { ButtonIcon } from "~components/ButtonIcon";
import { Input } from "../../components/Input/index";
import { Filter } from "../../components/Filter/index";
import { FlatList } from "react-native";
import { useState } from "react";

type PlayersProps = {};

export function Players({}: PlayersProps) {
  const [selectedTeam, setSelectedTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);

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
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(teamName) => String(teamName)}
          renderItem={({ item: teamName }) => (
            <Filter
              title={teamName}
              isActive={teamName === selectedTeam}
              onPress={() => setSelectedTeam(teamName)}
            />
          )}
          horizontal
        />

        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>
    </Container>
  );
}
