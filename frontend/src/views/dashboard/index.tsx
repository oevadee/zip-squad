import React from 'react';

import styled from 'styled-components';

import { PageHeading } from 'components/page-heading';
import { SummaryCard } from './components/summary-card';
import { Table } from 'components/table';
import { Card } from 'components/card';
import PlusIcon from 'assets/icons/plus-icon.svg';
import { useGetAllUsers } from 'api/graphql/hooks/user/useGetAllUsers';
import { Spinner } from 'components/spinner';

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

export const DashboardView = () => {
    const { data, fetching, error, reexecuteQuery } = useGetAllUsers();

    if (fetching) return <Spinner />;

    return (
        <>
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
            <Table columns={cols} rows={data} noDataText="No one owes you money" />
        </>
    );
};
