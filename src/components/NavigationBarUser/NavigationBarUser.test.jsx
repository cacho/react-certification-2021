import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import NavigationBarUser from './NavigationBarUser.component';
import ThemeProvider from '../../providers/Theme.provider';

describe('<NavigationBarUser />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <HashRouter>
          <NavigationBarUser />
        </HashRouter>
      </ThemeProvider>
    );
    const container = getByTestId('navigationBarUser');
    expect(container).not.toBe(null);
  });
  test('Fails without ThemeProvider', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});

    expect(() => render(<NavigationBarUser />)).toThrowError(
      `Can't use "useTheme" without an ThemeProvider!`
    );
    consoleSpy.mockRestore();
  });
});
