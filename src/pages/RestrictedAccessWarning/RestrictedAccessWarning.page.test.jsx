import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import ThemeProvider from '../../providers/Theme.provider';

import RestrictedAccessWarning from './RestrictedAccessWarning.page';

describe('<RestrictedAccessWarning />', () => {
  test('Renders resstricted access page', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <HashRouter>
          <RestrictedAccessWarning theme="light" />
        </HashRouter>
      </ThemeProvider>
    );
    const warning = getByTestId('ResrictedAccessPage');
    expect(warning).not.toBe(null);
  });
});
