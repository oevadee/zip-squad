import { ComponentType, ReactNode } from 'react';
import { IndexPage } from '../pages/index';

export interface IRoute {
    path: string;
    components: ComponentType<ReactNode>;
    exact?: boolean;
}

export enum Routes {
    Index = '/',
}

export const router = [
    {
        path: Routes.Index,
        exact: true,
        componenets: IndexPage,
    },
];
