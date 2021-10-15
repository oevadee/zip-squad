import React, { InputHTMLAttributes } from 'react';
import { FieldValues, UseFormGetValues, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

const SWrapper = styled.div`
    width: 100%;
    margin-bottom: 18px;
    display: flex;
    position: relative;
`;

const SLabel = styled.label`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.small};
    position: absolute;
    top: -12px;
    left: 8px;
`;

const SInput = styled.input`
    margin: 6px 0 12px;
    width: 100%;
    padding: 16px 12px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: none;
    border: solid 1px ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    transition: ${({ theme }) => theme.transitions.ease};

    &:focus {
        border: solid 1px ${({ theme }) => theme.colors.primary};
    }

    &::-webkit-input-placeholder {
        /* WebKit, Blink, Edge */
        color: ${({ theme }) => theme.colors.gray};
    }
    &:-moz-placeholder {
        /* Mozilla Firefox 4 to 18 */
        color: ${({ theme }) => theme.colors.gray};
    }
    &::-moz-placeholder {
        /* Mozilla Firefox 19+ */
        color: ${({ theme }) => theme.colors.gray};
    }
    &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: ${({ theme }) => theme.colors.gray};
    }
    &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: ${({ theme }) => theme.colors.gray};
    }
    &::placeholder {
        /* Most modern browsers support this now. */
        color: ${({ theme }) => theme.colors.gray};
    }
`;

const SHiddenInput = styled.input`
    width: 0;
    height: 0;
    visibility: hidden;
    position: absolute;
    ledt: 0;
    top: 0;
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    register: UseFormRegister<FieldValues>;
    getValues: UseFormGetValues<FieldValues>;
}

export const Input = ({
    placeholder,
    register,
    getValues,
    name,
    label,
    type = 'text',
    ...props
}: Props) => {
    return (
        <SWrapper>
            <SHiddenInput type="text" />
            <SLabel htmlFor={name}>{label}</SLabel>
            <SInput
                type={type}
                placeholder={placeholder}
                {...register(name)}
                onChange={() => getValues(name)}
                autoComplete="off"
                {...props}
            />
        </SWrapper>
    );
};
