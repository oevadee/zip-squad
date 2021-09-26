import React from 'react';
import theme from '../../contants/theme';
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
    height: 40px;
`;

export const Sidebar = () => {
    return (
        <SWrapper>
            <SLogoWrapper>
                <ZipSquadLogo />
            </SLogoWrapper>
            <nav>sidebar</nav>
        </SWrapper>
    );
};
