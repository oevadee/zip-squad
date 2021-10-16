import React from 'react';
import { render } from '../../../../jest/test-utils';
import { Chip } from '..';

it('render Chip component', () => {
    const chip = render(<Chip title="test" />);

    expect(chip).toMatchSnapshot();
});
