import React from 'react';

import styled from 'styled-components';

import { Chip } from 'components/chip';
import { PageHeading } from 'components/page-heading';
import { ChangePasswordForm } from './components/change-password-form';
import { ChangeUsernameForm } from './components/username-form';
import { Card } from 'components/card';
import { useUser } from 'providers/user';

const SSettingsWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 24px;
`;

const SFormsWrapper = styled.div`
    flex: 1;
`;

const SUserNameHeading = styled.h4`
    margin: 0;
    margin-bottom: 24px;
`;

export const SettingsView = () => {
    const { user } = useUser();

    return (
        <>
            <PageHeading>Settings</PageHeading>
            <SSettingsWrapper>
                <SFormsWrapper>
                    <ChangeUsernameForm />
                    <ChangePasswordForm />
                </SFormsWrapper>
                {user && (
                    <Card>
                        <SUserNameHeading>{`${user.firstName} ${user.lastName}`}</SUserNameHeading>
                        <Chip title={user.username} />
                    </Card>
                )}
            </SSettingsWrapper>
        </>
    );
};
