import React, { ReactNode } from 'react';
import styled from 'styled-components';

const SHeading = styled.h1<{ smallMargin: boolean }>`
    margin: 0;
    margin-bottom: ${({ smallMargin }) => (smallMargin ? '24px' : '48px')};
`;

interface Props {
    children: ReactNode;
    smallMargin?: boolean;
}

export const PageHeading = ({ children, smallMargin = false }: Props) => (
    <SHeading smallMargin={smallMargin}>{children}</SHeading>
);
