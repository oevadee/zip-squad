import React, { useState } from 'react';

import styled from 'styled-components';

import { PageHeading } from 'components/page-heading';
import { SummaryCard } from './components/summary-card';
import { Table } from 'components/table';
import { Card } from 'components/card';
import PlusIcon from 'assets/icons/plus-icon.svg';
import { useGetAllUsers } from 'api/graphql/hooks/user/useGetAllUsers';
import { Spinner } from 'components/spinner';
import { CustomModal } from 'components/custom-modal';
import { User, useUser } from 'providers/user';
import { CustomSelect } from 'components/custom-select';
import { Controller, useForm } from 'react-hook-form';

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
    const { data, fetching } = useGetAllUsers();
    const [modal, setModal] = useState({
        isOpen: false,
    });
    const { user } = useUser();
    const { control, handleSubmit } = useForm();

    const handleModalClose = () =>
        setModal({
            isOpen: false,
        });

    const onSubmit = (values: any) => {
        // eslint-disable-next-line no-console
        console.log(values);
    };

    const options = data
        ?.filter(({ id }: User) => user?.id !== id)
        .map((user: User) => ({
            value: user.id,
            label: user.username,
        }));

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
                            setModal({
                                isOpen: true,
                            })
                        }
                    >
                        <PlusIcon />
                    </SIconWrapper>
                </Card>
            </SCardsWrapper>
            <Table columns={cols} rows={[]} noDataText="No one owes you money" />
            <CustomModal isOpen={modal.isOpen} closeModal={handleModalClose}>
                <h1>Add new expense</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        control={control}
                        name="user"
                        render={({ field: { onChange, value, name, ref } }) => (
                            <CustomSelect
                                options={options}
                                inputRef={ref}
                                name={name}
                                onChange={onChange}
                                value={value}
                            />
                        )}
                    />
                    <button>Submit</button>
                </form>
            </CustomModal>
        </>
    );
};
