import { useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { Header } from "~components/Header";
import { Highlight } from "~components/Highlight";

import { Container } from "./styles";
import { GroupCard } from "~components/GroupCard";
import { ListEmpty } from "~components/ListEmpty";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera da Rocket"]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        style={styles.cardList}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  cardList: {
    width: "100%",
  },
});
