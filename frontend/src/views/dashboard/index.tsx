import React from 'react';

import styled from 'styled-components';

import { PageHeading } from 'components/page-heading';
import { SummaryCard } from './components/summary-card';
import { Table } from 'components/table';

const cols = [
    {
        label: 'col1',
        value: 'value1',
    },
    {
        label: 'col2',
        value: 'value2',
    },
    {
        label: 'col3',
        value: 'value3',
    },
    {
        label: 'col4',
        value: 'value4',
    },
    {
        label: 'col5',
        value: 'value5',
    },
];

export const DashboardView = () => {
    return (
        <div>
            <PageHeading>Dashboard</PageHeading>
            <SummaryCard />
            <Table columns={cols} noDataText="No one owes you money" loading={false} />
        </div>
    );
};
