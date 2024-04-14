import { Container, Logo } from "./styles";

interface HeaderProps {}

import logoImg from "~assets/logo.png";

export function Header(props: HeaderProps) {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
}
