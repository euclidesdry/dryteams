import styled from "styled-components/native";

import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
  padding-top: ${Constants.statusBarHeight}px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`;
