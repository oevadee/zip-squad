import { matchPath } from 'react-router';
import { IRoute } from 'router/routes';

export const matchRoute = (routes: (string | IRoute)[], pathname: string) => {
    return routes.find((route) => {
        const routeReference = typeof route === 'string' ? { path: route } : route;

        return !!matchPath(pathname, { ...routeReference, exact: true });
    });
};
