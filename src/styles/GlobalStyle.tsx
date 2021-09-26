import theme from 'constants/theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    html {
        min-height: 100vh;
    }

    body {
        margin: 0;
        padding: 0;
        background: ${theme.colors.background};
        color: ${theme.colors.white};
        font-family: 'Source Sans Pro', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;
