import React, { ReactNode } from 'react';
import styled from 'styled-components';

const SHeading = styled.h1`
    margin-bottom: 48px;
`;

interface Props {
    children: ReactNode;
}

export const PageHeading = ({ children }: Props) => {
    return <SHeading>{children}</SHeading>;
};
