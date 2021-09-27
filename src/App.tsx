import React from 'react';
import { Layout } from 'layouts/Layout';
import { ThemeProvider } from 'styled-components';
import theme from 'constants/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { Route, Switch } from 'react-router';
import { router } from 'router/routes';

export const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Layout>
                <Switch>
                    {router.map(({ component, exact, path }) => (
                        <Route exact={exact} path={path} component={component} />
                    ))}
                </Switch>
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
