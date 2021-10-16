import React from 'react';
import theme from 'constants/theme';
import Loader from 'react-loader-spinner';
import styled from 'styled-components';

const SLoader = styled(Loader)`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Spinner = () => (
    <SLoader
        type="MutatingDots"
        color={theme.colors.primary}
        secondaryColor={theme.colors.secondary}
        width={100}
        height={100}
    />
);
