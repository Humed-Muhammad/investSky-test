import * as React from 'react';
import { render } from '@testing-library/react';

import { Portfolio } from '..';


describe('<Portfolio  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Portfolio />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
