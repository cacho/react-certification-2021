import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import NavigationBarUser from './NavigationBarUser.component';
import { useTheme } from '../../providers/Theme.provider';

jest.mock('../../providers/Theme.provider');

describe('<NavigationBarUser />', () => {
  test('Renders correctly', () => {
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(
      <HashRouter>
        <NavigationBarUser />
      </HashRouter>
    );
    const container = getByTestId('navigationBarUser');
    expect(container).not.toBe(null);
  });
  test('Renders dark', () => {
    useTheme.mockReturnValue({
      state: { selectedTheme: 'dark' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(
      <HashRouter>
        <NavigationBarUser />
      </HashRouter>
    );
    const container = getByTestId('navigationBarUser');
    expect(container).not.toBe(null);
  });
});
