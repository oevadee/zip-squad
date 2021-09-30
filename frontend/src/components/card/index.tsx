import React, { ReactNode } from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
    flex: 1;
    border: solid 1px ${({ theme }) => theme.colors.darkGreen};
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 24px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
`;

interface Props {
    children: ReactNode;
}

export const Card = ({ children }: Props) => {
    return <SWrapper>{children}</SWrapper>;
};
