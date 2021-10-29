import React from 'react';
import styled from 'styled-components';
import { Controller, useForm } from 'react-hook-form';
import { CustomModal } from 'components/custom-modal';
import { CustomSelect } from 'components/custom-select';
import { Button } from 'components/button';
import { useDashboardContext } from 'views/dashboard/context';
import { Input } from 'components/input';

const SHeading = styled.h1<{ somebodyOwesMe: boolean | undefined }>`
    color: ${({ somebodyOwesMe, theme }) =>
        somebodyOwesMe === undefined
            ? theme.colors.white
            : somebodyOwesMe === true
            ? theme.colors.lightGreen
            : theme.colors.red};
`;

const SForm = styled.form`
    height: calc(100% - 90px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const SButtonWrapper = styled.div`
    width: calc(100% - 48px);
    display: flex;
    aqlign-items: center;
    justify-content: space-between;
    padding: 0 24px;
`;

const SSomebodyOwesMeButton = styled(Button)`
    background: ${({ theme }) => theme.colors.lightGreen};

    &:hover {
        background: ${({ theme }) => theme.colors.lightGreen};
    }
`;

const SIOweSomebodyButton = styled(Button)`
    background: ${({ theme }) => theme.colors.red};

    &:hover {
        background: ${({ theme }) => theme.colors.red};
    }
`;

const SButton = styled(Button)<{ somebodyOwesMe: boolean | undefined }>`
    background: ${({ somebodyOwesMe, theme }) =>
        somebodyOwesMe === false ? theme.colors.red : theme.colors.lightGreen};

    &:hover {
        background: ${({ somebodyOwesMe, theme }) =>
            somebodyOwesMe === false ? theme.colors.red : theme.colors.lightGreen};
    }
`;

export const AddNewExpensePopup = () => {
    const { control, handleSubmit, getValues, register } = useForm();
    const { modal, setModal, users } = useDashboardContext();

    const handleModalClose = () => {
        setModal({
            isOpen: false,
            page: 1,
            selectedUserId: null,
            somebodyOwesMe: undefined,
        });
    };

    const onSubmit = ({ user: selectedUserId, amount }: { user: number; amount: number }) => {
        setModal((state) => ({
            ...state,
            page: state.page + 1,
            selectedUserId,
        }));
        if (amount) {
            try {
                const { selectedUserId, somebodyOwesMe } = modal;
                alert({ amount, selectedUserId, somebodyOwesMe });
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <CustomModal isOpen={modal.isOpen} closeModal={handleModalClose}>
            <SHeading somebodyOwesMe={modal.somebodyOwesMe}>
                {modal.page === 1
                    ? 'Add new expense'
                    : `How much ${modal.somebodyOwesMe ? 'he/she owes you' : 'you owe him/her'} ?`}
            </SHeading>
            <SForm onSubmit={handleSubmit(onSubmit)}>
                {modal.page === 1 ? (
                    <>
                        <Controller
                            control={control}
                            name="user"
                            render={({ field: { onChange, value, name, ref } }) => (
                                <CustomSelect
                                    label="Choose a user"
                                    options={users}
                                    inputRef={ref}
                                    name={name}
                                    onChange={onChange}
                                    value={value}
                                />
                            )}
                        />
                        <SButtonWrapper>
                            <SSomebodyOwesMeButton
                                onClick={() =>
                                    setModal((state) => ({
                                        ...state,
                                        somebodyOwesMe: true,
                                    }))
                                }
                            >
                                He/She owes me
                            </SSomebodyOwesMeButton>
                            <SIOweSomebodyButton
                                onClick={() =>
                                    setModal((state) => ({
                                        ...state,
                                        somebodyOwesMe: false,
                                    }))
                                }
                            >
                                I owe him/her
                            </SIOweSomebodyButton>
                        </SButtonWrapper>
                    </>
                ) : (
                    <>
                        <Input
                            getValues={getValues}
                            name="amount"
                            label="Money"
                            register={register}
                            placeholder="Enter the amount"
                            type="number"
                            min="0"
                            step="0.01"
                        />
                        <div>
                            <SButton somebodyOwesMe={modal.somebodyOwesMe}>Submit</SButton>
                        </div>
                    </>
                )}
            </SForm>
        </CustomModal>
    );
};
