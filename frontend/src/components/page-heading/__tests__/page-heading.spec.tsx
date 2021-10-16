import React from 'react';
import { render } from '../../../../jest/test-utils';
import { PageHeading } from '..';

it('render PageHeading component', () => {
    const pageHeading = render(<PageHeading>test</PageHeading>);

    expect(pageHeading).toMatchSnapshot();
});
