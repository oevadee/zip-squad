import React from 'react';
import theme from 'constants/theme';
import styled from 'styled-components';
import ZipSquadLogo from 'assets/zip-squad-logo.svg';

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

const SListItem = styled.li`
    padding: 12px 24px;
    font-size: ${({ theme }) => theme.font.size.heading};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    border: solid 1px transparent;
    transition: ${({ theme }) => theme.transition.ease};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        border: solid 1px ${({ theme }) => theme.colors.primary};
    }
`;

export const Sidebar = () => {
    return (
        <SWrapper>
            <SLogoWrapper>
                <ZipSquadLogo />
            </SLogoWrapper>
            <nav>
                <SList>
                    <SListItem>Dashboard</SListItem>
                    <SListItem>Chat</SListItem>
                    <SListItem>Settings</SListItem>
                </SList>
            </nav>
        </SWrapper>
    );
};
