import React from 'react';

import styled from 'styled-components';

import { Chip } from 'components/chip';
import { PageHeading } from 'components/page-heading';
import { user } from 'constants/testUser';
import { ChangePasswordForm } from './components/change-password-form';
import { ChangeUsernameForm } from './components/username-form';
import { Card } from 'components/card';

const SWrapper = styled.div`
    width: 100%;
`;

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
    return (
        <SWrapper>
            <PageHeading>Settings</PageHeading>
            <SSettingsWrapper>
                <SFormsWrapper>
                    <ChangeUsernameForm />
                    <ChangePasswordForm />
                </SFormsWrapper>
                <Card>
                    <SUserNameHeading>{`${user.firstName} ${user.lastName}`}</SUserNameHeading>
                    <Chip title={user.username} />
                </Card>
            </SSettingsWrapper>
        </SWrapper>
    );
};
