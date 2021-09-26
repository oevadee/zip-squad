import React from 'react';
import { Layout } from 'layouts/Layout';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <h1>app</h1>
            </Layout>
        </ThemeProvider>
    );
};
