import React from 'react';
import theme from '../../contants/theme';
import styled from 'styled-components';
import { ReactComponent as ZipSquadLogo } from 'assets/zip-squad-logo.svg';

const SWrapper = styled.div`
    height: 100vh;
    width: ${theme.componenetSizes.sidebar};
    position: fixed;
    top: 0;
    left: 0;
`;

export const Sidebar = () => {
    return (
        <SWrapper>
            <div>
                <ZipSquadLogo />
            </div>
            <nav>sidebar</nav>
        </SWrapper>
    );
};
