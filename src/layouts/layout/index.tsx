import React, { ReactNode } from 'react';
import theme from 'constants/theme';
import styled from 'styled-components';
import { Sidebar } from 'components/sidebar';

const SWrapper = styled.div`
    height: 100vh;
`;

const SAppWrapper = styled.div`
    position: absolute;
    top: 0;
    left: ${theme.componenetSizes.sidebar};
    width: calc(100% - ${theme.componenetSizes.sidebar} - 64px);
    padding: ${({ theme }) => theme.appPadding};
`;

interface Props {
    children: ReactNode;
}

export const Layout = ({ children }: Props) => {
    return (
        <SWrapper>
            <Sidebar />
            <SAppWrapper>{children}</SAppWrapper>
        </SWrapper>
    );
};
