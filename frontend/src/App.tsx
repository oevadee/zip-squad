import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Router } from 'router/Router';
import { AppLayout } from 'layouts/app-layout';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <AppLayout>
                <Router />
            </AppLayout>
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
        </ThemeProvider>
    );
};
