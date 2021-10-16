import React from 'react';
import theme from 'constants/theme';
import styled from 'styled-components';
import ZipSquadLogo from 'assets/zip-squad-logo.svg';
import { Routes } from 'router/routes';
import { ListItem } from './components/list-item';
import { Button } from 'components/button';
import { LS_AUTH_TOKEN } from 'constants/auth';
import { useUser } from 'providers/user';

const SWrapper = styled.div`
    height: 100vh;
    width: ${theme.componenetSizes.sidebar};
    background: ${theme.colors.darkGreen};
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
`;

const SLogoWrapper = styled.div`
    height: 60px;
    display: grid;
    place-items: center;
    border-bottom: solid 1px ${({ theme }) => theme.colors.deepAqua};
`;

const SList = styled.ul`
    list-style: none;
    padding: 0;
`;

const SButtonWrapper = styled.div`
    margin: auto 0 12px;
    display: grid;
    place-items: center;
`;

export const Sidebar = () => {
    const { setUser } = useUser();

    const handleLogout = () => {
        localStorage.removeItem(LS_AUTH_TOKEN);
        setUser(null);
    };

    return (
        <SWrapper>
            <SLogoWrapper>
                <ZipSquadLogo />
            </SLogoWrapper>
            <nav>
                <SList>
                    <ListItem to={Routes.Dashboard}>Dashboard</ListItem>
                    <ListItem to={Routes.Chat}>Chat</ListItem>
                    <ListItem to={Routes.Users}>Users</ListItem>
                    <ListItem to={Routes.Settings}>Settings</ListItem>
                </SList>
            </nav>
            <SButtonWrapper>
                <Button onClick={handleLogout}>Logout</Button>
            </SButtonWrapper>
        </SWrapper>
    );
};
