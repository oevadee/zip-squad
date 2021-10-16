import React from 'react';
import { render } from '../../../../jest/test-utils';
import { Button } from '..';

it('render button component', () => {
    const button = render(<Button>test</Button>);

    expect(button).toMatchSnapshot();
});
