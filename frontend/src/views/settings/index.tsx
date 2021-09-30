import React from 'react';

import styled from 'styled-components';

import { Chip } from 'components/chip';
import { PageHeading } from 'components/page-heading';
import { user } from 'constants/testUser';
import { ChangePasswordForm } from './components/change-password-form';
import { ChangeUsernameForm } from './components/username-form';

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
    return (
        <SWrapper>
            <PageHeading>Settings</PageHeading>
            <SSettingsWrapper>
                <SFormsWrapper>
                    <ChangeUsernameForm />
                    <ChangePasswordForm />
                </SFormsWrapper>
                <SInfoWrapper>
                    <h2>{`${user.firstName} ${user.lastName}`}</h2>
                    <Chip title={user.username} />
                </SInfoWrapper>
            </SSettingsWrapper>
        </SWrapper>
    );
};
