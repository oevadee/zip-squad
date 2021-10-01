import { theme } from "constants/theme";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *:after, *:before {
    margin: 0;
  }

  body {
    background: ${theme.colors.background};
  }
`;
