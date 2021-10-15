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

export const App = () => {
    const { verifyToken } = useVerifyToken();
    const { setUser } = useUser();

    const verify = async () => {
        const token = localStorage.getItem(LS_AUTH_TOKEN);
        const user = token && (await verifyToken(token));
        user && setUser(user);
    };

    useEffect(() => {
        verify();
    }, []);

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
