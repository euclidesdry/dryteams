import "styled-components/native";

import theme from "../theme";

declare module "styled-components/native" {
  type ThemeProps = typeof theme;

  export interface DefaultTheme extends ThemeProps {}
}
