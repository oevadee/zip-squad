import { LoginPage } from 'pages/login';
import { RegisterPage } from 'pages/register';
import { ComponentType, ReactNode } from 'react';
import { IndexPage } from '../pages/index';

export interface IRoute {
    path: string;
    component: ComponentType<ReactNode>;
    exact?: boolean;
}

export enum Routes {
    Index = '/',
    Login = '/login',
    Register = '/register',
}

export const router = [
    {
        path: Routes.Index,
        component: IndexPage,
        exact: true,
    },
    {
        path: Routes.Login,
        component: LoginPage,
    },
    {
        path: Routes.Register,
        component: RegisterPage,
    },
];
