import React, { ReactNode } from 'react';
import { Layout } from 'layouts/layout';
import { useLocation } from 'react-router';
import { Routes } from 'router/routes';
import { matchRoute } from 'utils/matchRoute';

const Routes_WITHOUT_LAYOUT = [Routes.Login, Routes.Register];

interface Props {
    children: ReactNode;
}

export const AppLayout = ({ children }: Props) => {
    const { pathname } = useLocation();

    const withoutLaoutout = !!matchRoute(Routes_WITHOUT_LAYOUT, pathname);

    return withoutLaoutout ? <>{children}</> : <Layout>{children}</Layout>;
};
