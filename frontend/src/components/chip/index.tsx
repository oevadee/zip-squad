import React from 'react';
import styled from 'styled-components';

const SWrapper = styled.div`
    background: ${({ theme }) => theme.colors.secondary};
    padding: 12px 24px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SParagraph = styled.p`
    margin: 0;
    font-weight: ${({ theme }) => theme.font.weight.bold};
`;

interface Props {
    title: string;
}

export const Chip = ({ title }: Props) => {
    return (
        <SWrapper>
            <SParagraph>@{title}</SParagraph>
        </SWrapper>
    );
};
