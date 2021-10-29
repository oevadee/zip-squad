import React from 'react';

import styled from 'styled-components';

import { PageHeading } from 'components/page-heading';
import { SummaryCard } from './components/summary-card';
import { Table } from 'components/table';
import { Card } from 'components/card';
import PlusIcon from 'assets/icons/plus-icon.svg';
import { Spinner } from 'components/spinner';

import { useDashboardContext } from './context';
import { AddNewExpensePopup } from './components/add-new-expense-popup';

const SCardsWrapper = styled.div`
    display: flex;
    gap: 24px;
    margin-bottom: 12px;
`;

const SAddExpenseHeading = styled.h2`
    margin: 0 0 8px;
`;

const SIconWrapper = styled.button`
    width: 50px;
    height: 50px;
    background: none;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    position: relative;

    svg {
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
    }
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
    const { setModal, fetching } = useDashboardContext();

    if (fetching) return <Spinner />;

    return (
        <>
            <PageHeading>Dashboard</PageHeading>
            <SCardsWrapper>
                <SummaryCard />
                <Card>
                    <SAddExpenseHeading>Add new expense</SAddExpenseHeading>
                    <SIconWrapper
                        onClick={() =>
                            setModal((state) => ({
                                ...state,
                                isOpen: true,
                            }))
                        }
                    >
                        <PlusIcon />
                    </SIconWrapper>
                </Card>
            </SCardsWrapper>
            <Table columns={cols} rows={[]} noDataText="No one owes you money" />
            <AddNewExpensePopup />
        </>
    );
};
