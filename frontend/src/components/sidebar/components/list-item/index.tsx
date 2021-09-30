import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SLink = styled(Link)`
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
`;

const SListItem = styled.li`
    padding: 12px 24px;
    font-size: ${({ theme }) => theme.font.size.heading};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    border: solid 1px transparent;
    transition: ${({ theme }) => theme.transitions.ease};
    cursor: pointer;

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
        border: solid 1px ${({ theme }) => theme.colors.primary};
    }
`;

interface Props {
    to: string;
    children: ReactNode;
}

export const ListItem = ({ to, children }: Props) => {
    return (
        <SLink to={to}>
            <SListItem>{children}</SListItem>
        </SLink>
    );
};
