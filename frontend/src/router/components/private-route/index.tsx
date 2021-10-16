import React, { ReactNode } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';
import { useUser } from 'providers/user';
import { Routes } from 'router/routes';

interface Props {
    children: ReactNode;
}

export const PrivateRoute = ({ children, ...rest }: Props & RouteProps) => {
    const { user } = useUser();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: Routes.Login,
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
