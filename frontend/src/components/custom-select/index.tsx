import React from 'react';
import { RefCallBack } from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';

const SLabel = styled.label`
    text-transform: uppercase;
    font-size: ${({ theme }) => theme.font.size.small};
`;

const SSelect = styled(Select)`
    .select__control {
        background: none;
        margin: 6px 0 0;
        width: 100%;
        border-radius: ${({ theme }) => theme.borderRadius};
        border: solid 1px ${({ theme }) => theme.colors.darkGreen};
        outline: none;
        transition: ${({ theme }) => theme.transitions.ease};

        &:hover {
            border: solid 1px ${({ theme }) => theme.colors.primary};
        }
    }

    .select__control--menu-is-open {
        border-radius: ${({ theme }) => theme.borderRadius} ${({ theme }) => theme.borderRadius} 0 0;
        border-bottom: none;
        box-shadow: none;
    }

    .select__single-value {
        color: ${({ theme }) => theme.colors.white} !important;
    }

    .select__menu {
        background: none;
        margin: 0;
        padding: 0;
        border-left: solid 1px ${({ theme }) => theme.colors.darkGreen};
        border-right: solid 1px ${({ theme }) => theme.colors.darkGreen};
    }

    .select__option {
        background: none;

        &:hover {
            background: ${({ theme }) => theme.colors.primary};
        }
    }
`;

export type OptionType = {
    value: number;
    label: string;
};

interface Props {
    options: OptionType[];
    inputRef: RefCallBack;
    name: string;
    onChange: (value: number) => void;
    value: number;
    label: string;
}

export const CustomSelect = ({
    options,
    inputRef,
    name,
    onChange,
    value,
    label,
    ...rest
}: Props) => {
    return (
        <div>
            <SLabel htmlFor={name}>{label}</SLabel>
            <SSelect
                onChange={(option: any) => {
                    onChange(option.value);
                }}
                value={options?.find((c) => c.value === value) || []}
                name={name}
                ref={inputRef}
                className="basic-single"
                classNamePrefix="select"
                isSearchable
                options={options}
                {...rest}
            />
        </div>
    );
};
