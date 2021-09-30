import React from 'react';

import styled from 'styled-components';

import { PageHeading } from 'components/page-heading';
import { SummaryCard } from './components/summary-card';
import { Table } from 'components/table';

const cols = [
    {
        label: 'Username',
        value: 'username',
    },
    {
        label: 'Money you owe',
        value: 'moneyYouOwe',
    },
    {
        label: 'Money people owe You',
        value: 'moneyPeopleOwes',
    },
];

const rows = [
    {
        username: 'Adi',
        moneyYouOwe: 123,
        moneyPeopleOwes: 40,
    },
    {
        username: 'Boby',
        moneyYouOwe: 0,
        moneyPeopleOwes: 420,
    },
];

export const DashboardView = () => {
    return (
        <div>
            <PageHeading>Dashboard</PageHeading>
            <SummaryCard />
            <Table columns={cols} rows={rows} noDataText="No one owes you money" loading={false} />
        </div>
    );
};
