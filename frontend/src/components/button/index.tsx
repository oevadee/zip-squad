import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import styled from 'styled-components';

const SButton = styled.button`
    border: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.ease};
`;

const SButtonPrimary = styled(SButton)`
    padding: 10px 32px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: ${({ theme }) => theme.colors.primary};

    &:hover {
        background: ${({ theme }) => theme.colors.primary90};
        transform: scale(1.1);
    }

    &:focus {
        outline-color: ${({ theme }) => theme.colors.primary};
    }
`;

const SButtonSecondary = styled(SButton)`
    background: none;
`;

const SParagraph = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.white};
`;

const SParagraohPrimary = styled(SParagraph)`
    text-transform: uppercase;
`;

const SParagraohSecondary = styled(SParagraph)`
    transition: ${({ theme }) => theme.transitions.ease};

    &:hover {
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export enum ButtonVariants {
    Primary = 'primary',
    Secondary = 'secondary',
}

interface Props
    extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant?: ButtonVariants;
}

export const Button = ({ children, variant = ButtonVariants.Primary }: Props) => {
    const Button = variant === ButtonVariants.Primary ? SButtonPrimary : SButtonSecondary;
    const Paragraph = variant === ButtonVariants.Primary ? SParagraohPrimary : SParagraohSecondary;

    return (
        <Button>
            <Paragraph>{children}</Paragraph>
        </Button>
    );
};
