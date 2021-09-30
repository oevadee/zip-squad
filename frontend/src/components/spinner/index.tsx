import React from 'react';
import theme from 'constants/theme';
import Loader from 'react-loader-spinner';

export const Spinner = () => (
    <Loader
        type="MutatingDots"
        color={theme.colors.primary}
        secondaryColor={theme.colors.secondary}
        width={100}
        height={100}
    />
);
