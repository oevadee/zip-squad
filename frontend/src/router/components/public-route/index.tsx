import React, { ReactNode } from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

interface Props {
    children: ReactNode;
    verified: boolean;
    redirectPath: string;
}

export const PublicRoute = ({ children, verified, redirectPath, ...rest }: Props & RouteProps) => (
    <Route
        {...rest}
        render={({ location }) =>
            verified ? (
                children
            ) : (
                <Redirect to={{ pathname: redirectPath, state: { from: location } }} />
            )
        }
    />
);
