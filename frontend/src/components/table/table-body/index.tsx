import React from 'react';
import { Spinner } from 'components/spinner';

import styled from 'styled-components';
import { Column } from '..';

const STr = styled.tr`
    border-bottom: 2px solid green;
    height: 40px;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
    }
`;

const STd = styled.td`
    padding: 12px 8px;
    white-space: nowrap;
    overflow-hidden;
    text-overflow: ellipsis;
`;

export interface TableBodyProps {
    rows?: any[];
    loading: boolean;
    columns: Column[];
    onRowClick?: (row: any) => void;
    noDataText: string;
}

export const TableBody = ({
    rows,
    loading = false,
    columns,
    onRowClick,
    noDataText,
}: TableBodyProps) => {
    const getCells = (row: any) =>
        columns.map((col, i) => {
            const cellContent = col.customFormatter ? col.customFormatter : row[col.value];
            return <STd key={`col-${i}`}>{cellContent}</STd>;
        });

    const handleRowClick = (row: any) => onRowClick && onRowClick(row);

    return (
        <tbody>
            {rows?.length && !loading ? (
                rows.map((row, i) => (
                    <STr key={i} onClick={() => handleRowClick(row)}>
                        {getCells(row)}
                    </STr>
                ))
            ) : loading ? (
                <Spinner />
            ) : (
                <h3>{noDataText}</h3>
            )}
        </tbody>
    );
};
