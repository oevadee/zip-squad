import React, { useEffect } from 'react';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Router } from 'router/Router';
import { AppLayout } from 'layouts/app-layout';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { useVerifyToken } from 'api/graphql/hooks/auth/useVerifyToken';
import { LS_AUTH_TOKEN } from 'constants/auth';
import { useUser } from 'providers/user';
import { BrowserRouter } from 'react-router-dom';
import { VerifyUser } from 'providers/verify-user';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <VerifyUser>
                <BrowserRouter>
                    <AppLayout>
                        <Router />
                    </AppLayout>
                </BrowserRouter>
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
            </VerifyUser>
        </ThemeProvider>
    );
};
