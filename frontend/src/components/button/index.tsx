import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

const SButton = styled.button`
    border: none;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.ease};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
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

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: ButtonVariants;
}

export const Button = ({ children, variant = ButtonVariants.Primary, ...rest }: Props) => {
    const Button = variant === ButtonVariants.Primary ? SButtonPrimary : SButtonSecondary;
    const Paragraph = variant === ButtonVariants.Primary ? SParagraohPrimary : SParagraohSecondary;

    return (
        <Button {...rest}>
            <Paragraph>{children}</Paragraph>
        </Button>
    );
};
