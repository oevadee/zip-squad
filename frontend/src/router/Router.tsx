import React from 'react';
import { useUser } from 'providers/user';
import { Route, Switch } from 'react-router-dom';
import { IRoute, router, Routes } from './routes';
import { PublicRoute } from './components/public-route';
import { LoginPage } from 'pages/login';
import { RegisterPage } from 'pages/register';
import { PrivateRoute } from './components/private-route';

export const Router = () => {
    const { user } = useUser();

    return (
        <Switch>
            <PublicRoute
                exact={true}
                path={Routes.Login}
                verified={!user}
                redirectPath={Routes.Dashboard}>
                <LoginPage />
            </PublicRoute>
            <PublicRoute
                exact={true}
                path={Routes.Register}
                verified={!user}
                redirectPath={Routes.Dashboard}>
                <RegisterPage />
            </PublicRoute>
            <PrivateRoute exact={true}>
                {router.map(({ component, exact, path, strict }: IRoute, i: number) => (
                    <Route
                        key={i}
                        strict={strict}
                        exact={exact}
                        path={path}
                        component={component}
                    />
                ))}
            </PrivateRoute>
        </Switch>
    );
};
