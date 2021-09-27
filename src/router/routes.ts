import { ComponentType, ReactNode } from 'react';
import { IndexPage } from '../pages/index';

export interface IRoute {
    path: string;
    component: ComponentType<ReactNode>;
    exact?: boolean;
}

export enum Routes {
    Index = '/',
}

export const router = [
    {
        path: Routes.Index,
        exact: true,
        component: IndexPage,
    },
];
