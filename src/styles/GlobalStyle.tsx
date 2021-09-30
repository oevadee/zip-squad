import theme from 'constants/theme';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *, *:after, *:before {
        font-family: 'Source Sans Pro', sans-serif;
    };

    html {
        min-height: 100vh;
    };

    body {
        margin: 0;
        padding: 0;
        background: ${theme.colors.background};
        color: ${theme.colors.white};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    };
`;
