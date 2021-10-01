import React, { ReactNode } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "constants/theme";
import { GlobalStyle } from "styles/index";

const SWrapper = styled.main`
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  background: ${({ theme }) => theme.colors.background};
`;

interface Props {
  children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SWrapper>{children}</SWrapper>
    </ThemeProvider>
  );
};
