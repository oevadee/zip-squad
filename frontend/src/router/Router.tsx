import React from 'react';
import { Route, Switch } from 'react-router';
import { router } from './routes';

export const Router = () => (
    <Switch>
        {router.map(({ component, exact, path }) => (
            <Route key={path} exact={exact} path={path} component={component} />
        ))}
    </Switch>
);
