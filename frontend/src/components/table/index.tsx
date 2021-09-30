import { User } from 'constants/testUser';
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { TableBody, TableBodyProps } from './table-body';

const SWrapper = styled.div`
    width: 100%;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`;

const STable = styled.table`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    table-layout: fixed;
`;

const STHead = styled.thead`
    font-size: ${({ theme }) => theme.font.size.small};
    color: ${({ theme }) => theme.colors.gray};
    text-transform: uppercase;
    border-bottom: 2px solid ${({ theme }) => theme.colors.darkGreen};
`;

const STh = styled.th`
    padding: 6px 0;
`;

export type Column = {
    label: string;
    value: string;
    customFormatter?: (value: string) => ReactNode | JSX.Element | string;
};

interface Props extends TableBodyProps {}

export const Table = ({ columns, ...tableBodyProps }: Props) => {
    return (
        <SWrapper>
            <STable>
                <STHead>
                    <tr>
                        {columns.map(({ label }, i) => (
                            <STh key={i}>{label}</STh>
                        ))}
                    </tr>
                </STHead>
                <TableBody columns={columns} {...tableBodyProps} />
            </STable>
        </SWrapper>
    );
};
