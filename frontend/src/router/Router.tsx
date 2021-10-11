import { useUser } from 'providers/user';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { router, Routes } from './routes';

enum RoutesWithoutLayout {
    Login = Routes.Login,
    Register = Routes.Register,
}

export const Router = () => {
    const { user } = useUser();

    console.log(RoutesWithoutLayout);

    return (
        <Switch>
            {router.map(({ component, exact, path }) => (
                <Route key={path} exact={exact} path={path} component={component} />
            ))}
            {!user && <Redirect to={Routes.Login} />}
        </Switch>
    );
};
