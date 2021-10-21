import React from 'react';
import { PageHeading } from 'components/page-heading';
import { Table } from 'components/table';
import { useGetAllUsers } from 'api/graphql/hooks/user/useGetAllUsers';
import { Spinner } from 'components/spinner';

export const UsersView = () => {
    const { data, fetching } = useGetAllUsers();

    const cols = [
        {
            label: 'ID',
            value: 'id',
        },
        {
            label: 'First name',
            value: 'firstName',
        },
        {
            label: 'Last name',
            value: 'lastName',
        },
        {
            label: 'Username',
            value: 'username',
        },
    ];

    return (
        <>
            <PageHeading smallMargin>Users</PageHeading>
            {fetching ? <Spinner /> : <Table columns={cols} noDataText="No users" rows={data} />}
        </>
    );
};
