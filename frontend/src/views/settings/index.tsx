import { Button } from 'components/button';
import { Chip } from 'components/chip';
import { Input } from 'components/input';
import { PageHeading } from 'components/page-heading';
import { user } from 'constants/testUser';
import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

const SWrapper = styled.div`
    width: 100%;
`;

const SSettingsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
`;

const SForm = styled.form`
    flex: 1;
`;

const SInfoWrapper = styled.div`
    flex: 1;
    border: solid 1px ${({ theme }) => theme.colors.darkGreen};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 24px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SettingsView = () => {
    const { register, handleSubmit, getValues } = useForm();

    return (
        <SWrapper>
            <PageHeading>Settings</PageHeading>
            <SSettingsWrapper>
                <SForm>
                    <Input
                        label="Username"
                        name="username"
                        register={register}
                        getValues={getValues}
                        placeholder="Change your username"
                    />
                    <Input
                        label="Old password"
                        name="oldPassword"
                        register={register}
                        getValues={getValues}
                        placeholder="Enter your old password"
                    />
                    <Input
                        label="Password"
                        name="password"
                        register={register}
                        getValues={getValues}
                        placeholder="Change your password"
                    />
                    <Input
                        label="ConfirmPassword"
                        name="confirmPassword"
                        register={register}
                        getValues={getValues}
                        placeholder="Confirm your password"
                    />
                    <Button>Save</Button>
                </SForm>
                <SInfoWrapper>
                    <h2>{`${user.firstName} ${user.lastName}`}</h2>
                    <Chip title={user.username} />
                </SInfoWrapper>
            </SSettingsWrapper>
        </SWrapper>
    );
};
