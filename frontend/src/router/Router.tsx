import React from 'react';
import { useUser } from 'providers/user';
import { Redirect, Route, Switch, useHistory } from 'react-router';
import { router, Routes } from './routes';

export const Router = () => {
    const { user } = useUser();
    const { push } = useHistory();

    console.log(user);

    return (
        <>
            {!user ? <Redirect to={Routes.Login} /> : push(Routes.Dashboard)}
            <Switch>
                {router.map(({ component, exact, path }) => (
                    <Route key={path} exact={exact} path={path} component={component} />
                ))}
            </Switch>
        </>
    );
};
