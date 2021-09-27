import React from 'react';
import { Layout } from 'layouts/Layout';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <h1>app in building...</h1>
                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={true}
                    newestOnTop={true}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    pauseOnHover
                />
            </Layout>
        </ThemeProvider>
    );
};
