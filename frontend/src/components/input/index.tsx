import React, { InputHTMLAttributes, useState } from 'react';
import { FieldValues, UseFormGetValues, UseFormRegister } from 'react-hook-form';
import styled from 'styled-components';

const SWrapper = styled.div`
    width: 100%;
    margin-bottom: 18px;
    display: flex;
    flex-direction: column;
`;

const SLabel = styled.label`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.small};
`;

const SInputWrapper = styled.div`
    width: 100%;
    position: relative;
`;

const SInput = styled.input<{ isPassword: boolean | undefined }>`
    -webkit-text-security: ${({ isPassword }) => (isPassword ? 'disc' : 'none')};
    margin: 6px 0;
    width: calc(100% - 24px);
    padding: 16px 12px;
    border-radius: ${({ theme }) => theme.borderRadius};
    background: none;
    border: solid 1px ${({ theme }) => theme.colors.darkGreen};
    color: ${({ theme }) => theme.colors.white};
    outline: none;
    transition: ${({ theme }) => theme.transitions.ease};
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

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

const SShowPasswordButton = styled.button`
    background: none;
    border: none;
    width: 45px;
    height: 45px;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;

    img {
        -webkit-filter: invert(70%); /* Safari/Chrome */
        filter: invert(70%);
        object-fit: contain;
        width: 100%;
        height: 100%;
    }
`;

const SHiddenInput = styled.input`
    width: 0;
    height: 0;
    visibility: hidden;
    position: absolute;
    left: 0;
    top: 0;
`;

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label: string;
    register: UseFormRegister<FieldValues>;
    getValues: UseFormGetValues<FieldValues>;
    isPassword?: boolean | undefined;
}

export const Input = ({
    placeholder,
    register,
    getValues,
    name,
    label,
    type = 'text',
    isPassword,
    ...props
}: Props) => {
    const [passwordShown, setPasswordShow] = useState(false);

    return (
        <SWrapper>
            <SLabel htmlFor={name}>{label}</SLabel>
            <SInputWrapper>
                <SInput
                    isPassword={passwordShown ? false : isPassword}
                    type={type === 'password' ? (passwordShown ? 'text' : 'password') : type}
                    placeholder={placeholder}
                    {...register(name)}
                    onChange={() => getValues(name)}
                    autoComplete="off"
                    {...props}
                />
                {(type === 'password' || isPassword) && (
                    <SShowPasswordButton
                        type="button"
                        onClick={() => setPasswordShow(!passwordShown)}
                    >
                        <img src="src/assets/icons/eye-password.png" alt="show password" />
                    </SShowPasswordButton>
                )}
            </SInputWrapper>
            <SHiddenInput type="text" />
        </SWrapper>
    );
};
