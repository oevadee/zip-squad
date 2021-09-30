import { LoginPage } from 'pages/login';
import { ComponentType, ReactNode } from 'react';
import { IndexPage } from '../pages/index';

export interface IRoute {
    path: string;
    component: ComponentType<ReactNode>;
    exact?: boolean;
    layout: boolean;
}

export enum Routes {
    Index = '/',
    Login = '/login',
}

export const router = [
    {
        path: Routes.Index,
        component: IndexPage,
        layout: true,
        exact: true,
    },
    {
        path: Routes.Login,
        component: LoginPage,
        layout: false,
    },
];
