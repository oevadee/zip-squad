import React from 'react';
import { RefCallBack } from 'react-hook-form';
import Select from 'react-select';
import styled from 'styled-components';

const SSelect = styled(Select)`
    .select__control {
        background: none;
        margin: 6px 0;
        width: calc(100% - 24px);
        border-radius: ${({ theme }) => theme.borderRadius};
        border: solid 1px ${({ theme }) => theme.colors.darkGreen};
        outline: none;
        transition: ${({ theme }) => theme.transitions.ease};
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;

        &:hover {
            border: solid 1px ${({ theme }) => theme.colors.primary};
        }
    }

    .select__single-value {
        color: ${({ theme }) => theme.colors.white} !important;
    }

    .select__input-container {
        input {
        }
    }

    .select__menu {
        background: none;
    }

    .select__option {
        background: none;
        border-radius: ${({ theme }) => theme.borderRadius};

        &:hover {
            background: ${({ theme }) => theme.colors.primary};
        }
    }
`;

type OptionType = {
    value: number;
    label: string;
};

interface Props {
    options: OptionType[];
    inputRef: RefCallBack;
    name: string;
    onChange: (value: number) => void;
    value: number;
}

export const CustomSelect = ({ options, inputRef, name, onChange, value, ...rest }: Props) => {
    return (
        <SSelect
            onChange={(option: any) => {
                onChange(option.value);
            }}
            value={options.find((c) => c.value === value)}
            name={name}
            ref={inputRef}
            className="basic-single"
            classNamePrefix="select"
            isClearable
            isSearchable
            options={options}
            {...rest}
        />
    );
};
