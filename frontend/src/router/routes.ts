import { LoginPage } from 'pages/login';
import { RegisterPage } from 'pages/register';
import { SettingsPage } from 'pages/settings';
import { UsersPage } from 'pages/users';
import { ComponentType, ReactNode } from 'react';
import { DashboardPage } from '../pages/index';

export interface IRoute {
    path: string;
    component: ComponentType<ReactNode>;
    exact?: boolean;
    strict?: boolean;
}

export enum Routes {
    Dashboard = '/',
    Login = '/login',
    Register = '/register',
    Settings = '/settings',
    Chat = '/chat',
    Users = '/users',
}

export const router = [
    {
        path: Routes.Dashboard,
        component: DashboardPage,
        exact: true,
        strict: true,
    },
    {
        path: Routes.Settings,
        component: SettingsPage,
        strict: true,
    },
    {
        path: Routes.Users,
        component: UsersPage,
        strict: true,
    },
];
