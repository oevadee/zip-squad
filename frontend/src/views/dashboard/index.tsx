import React from 'react';

import styled from 'styled-components';

import { PageHeading } from 'components/page-heading';
import { SummaryCard } from './components/summary-card';
import { Table } from 'components/table';
import { Card } from 'components/card';
import PlusIcon from 'assets/icons/plus-icon.svg';

const SCardsWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 12px;
`;

const SAddExpenseHeading = styled.h2`
    margin: 0 0 8px;
`;

const SIconWrapper = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
`;

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
            <SCardsWrapper>
                <SummaryCard />
                <Card>
                    <SAddExpenseHeading>Add new expense</SAddExpenseHeading>
                    <SIconWrapper>
                        <PlusIcon />
                    </SIconWrapper>
                </Card>
            </SCardsWrapper>
            <Table columns={cols} rows={rows} noDataText="No one owes you money" loading={false} />
        </div>
    );
};
