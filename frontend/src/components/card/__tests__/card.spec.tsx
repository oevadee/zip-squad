import React from 'react';
import { render } from '../../../../jest/test-utils';
import { Card } from '..';

it('render card component', () => {
    const card = render(<Card>test</Card>);

    expect(card).toMatchSnapshot();
});
