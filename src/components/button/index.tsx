import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styled from 'styled-components';

const SButton = styled.button`
    padding: 16px 32px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    cursor: pointer;

    &:hover {
        background: ${({ theme }) => theme.colors.primary90};
    }

    &:focus {
        outline-color: ${({ theme }) => theme.colors.primary};
    }
`;

const SParagraph = styled.p`
    text-transform: uppercase;
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
`;

interface Props
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button = ({ children }: Props) => {
    return (
        <SButton>
            <SParagraph>{children}</SParagraph>
        </SButton>
    );
};
