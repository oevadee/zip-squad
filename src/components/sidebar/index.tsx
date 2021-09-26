import React from 'react';
import styled from 'styled-components';
import ZipSquadLogo from '../../assets/zip-squad-logo.png';

const SWrapper = styled.div`
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
`;

export const Sidebar = () => {
    return (
        <SWrapper>
            <div>
                <img src="assets/zip-squad-logo.png" alt="" />
            </div>
            <nav>sidebar</nav>
        </SWrapper>
    );
};
