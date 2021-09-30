import { user } from 'constants/testUser';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { router, Routes } from './routes';

export const Router = () => (
    <Switch>
        {router.map(({ component, exact, path }) => (
            <Route key={path} exact={exact} path={path} component={component} />
        ))}
        {!user && <Redirect to={Routes.Login} />}
    </Switch>
);
