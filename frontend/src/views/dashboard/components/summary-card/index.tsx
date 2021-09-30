import React from 'react';

import styled from 'styled-components';

import { Card } from 'components/card';

const SCardInnerWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const SSummaryWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
`;

const SSummaryAmount = styled.p`
    font-size: ${({ theme }) => theme.font.size.heading};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    color: ${({ theme }) => theme.colors.lightGreen};
    margin: 0;
`;

const SSummaryNegativeAmount = styled(SSummaryAmount)`
    color: ${({ theme }) => theme.colors.red};
`;

const SSummaryParagraph = styled.p`
    margin: 0;
`;

export const SummaryCard = () => {
    return (
        <Card>
            <SCardInnerWrapper>
                <SSummaryWrapper>
                    <SSummaryAmount>120pln</SSummaryAmount>
                    <SSummaryParagraph>Money people owe you</SSummaryParagraph>
                </SSummaryWrapper>
                <SSummaryWrapper>
                    <SSummaryNegativeAmount>50pln</SSummaryNegativeAmount>
                    <SSummaryParagraph>Money you owe people</SSummaryParagraph>
                </SSummaryWrapper>
            </SCardInnerWrapper>
        </Card>
    );
};
