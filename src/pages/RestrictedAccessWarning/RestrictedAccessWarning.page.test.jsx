import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import { useTheme } from '../../providers/Theme.provider';

import RestrictedAccessWarning from './RestrictedAccessWarning.page';

jest.mock('../../providers/Theme.provider');
describe('<RestrictedAccessWarning />', () => {
  test('Renders resstricted access page light', () => {
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(
      <HashRouter>
        <RestrictedAccessWarning />
      </HashRouter>
    );
    const warning = getByTestId('ResrictedAccessPage');
    expect(warning).not.toBe(null);
  });

  test('Renders restricted access page dark ', () => {
    useTheme.mockReturnValue({
      state: { selectedTheme: 'dark' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(
      <HashRouter>
        <RestrictedAccessWarning />
      </HashRouter>
    );
    const warning = getByTestId('ResrictedAccessPage');
    expect(warning).not.toBe(null);
  });
});
