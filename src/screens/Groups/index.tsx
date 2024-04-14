import { useState } from "react";
import { FlatList } from "react-native";

import { Header } from "~components/Header";
import { Highlight } from "~components/Highlight";

import { Container } from "./styles";
import { GroupCard } from "~components/GroupCard";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera da Rocket"]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <GroupCard title={item} />}
      />
    </Container>
  );
}
