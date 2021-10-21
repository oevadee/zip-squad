import React from 'react';
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
}

export const CustomSelect = ({ options }: Props) => {
    return (
        <SSelect
            name="user"
            className="basic-single"
            classNamePrefix="select"
            isClearable
            isSearchable
            options={options}
        />
    );
};
