import React from 'react';
import { DashboardContextProvider } from 'views/dashboard/context';
import { DashboardView } from '../../views/dashboard/index';

export const DashboardPage = () => {
    return (
        <DashboardContextProvider>
            <DashboardView />
        </DashboardContextProvider>
    );
};
