import React from 'react';
import { render } from '../../../../jest/test-utils';
import { Spinner } from '..';

it('render spinner component', () => {
    const spinner = render(<Spinner />);

    expect(spinner).toMatchSnapshot();
});
