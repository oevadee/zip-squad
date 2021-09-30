import React from 'react';
import theme from 'constants/theme';
import styled from 'styled-components';
import ZipSquadLogo from 'assets/zip-squad-logo.svg';
import { Link } from 'react-router-dom';
import { Routes } from 'router/routes';
import { ListItem } from './components/list-item';

const SWrapper = styled.div`
    height: 100vh;
    width: ${theme.componenetSizes.sidebar};
    background: ${theme.colors.darkGreen};
    position: fixed;
    top: 0;
    left: 0;
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

export const Sidebar = () => {
    return (
        <SWrapper>
            <SLogoWrapper>
                <ZipSquadLogo />
            </SLogoWrapper>
            <nav>
                <SList>
                    <ListItem to={Routes.Dashboard}>Dashboard</ListItem>
                    <ListItem to={Routes.Chat}>Chat</ListItem>
                    <ListItem to={Routes.Settings}>Settings</ListItem>
                </SList>
            </nav>
        </SWrapper>
    );
};
