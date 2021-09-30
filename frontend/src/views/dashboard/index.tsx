import React from 'react';

import styled from 'styled-components';

import { PageHeading } from 'components/page-heading';
import { SummaryCard } from './components/summary-card';

export const DashboardView = () => {
    return (
        <div>
            <PageHeading>Dashboard</PageHeading>
            <SummaryCard />
        </div>
    );
};
