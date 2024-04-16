import { TouchableOpacityProps } from "react-native";
import { Container, Icon } from "./styles";

type ButtonProps = TouchableOpacityProps & {};

export function ButtonIcon({}: ButtonProps) {
  return (
    <Container>
      <Icon name="home" type={"SECONDARY"} />
    </Container>
  );
}
