import React from 'react';
import { Layout } from 'layouts/Layout';
import { ThemeProvider } from 'styled-components';
import theme from './contants/theme';
import { GlobalStyle } from 'styles/GlobalStyle';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Layout>
                <h1>app</h1>
            </Layout>
        </ThemeProvider>
    );
};
