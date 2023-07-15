import * as React from 'react';
import { render } from '@testing-library/react';

import { Login } from '..';


describe('<Login  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Login />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
