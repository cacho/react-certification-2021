import React from 'react';
import { render } from '@testing-library/react';
import NavigationBarUser from './NavigationBarUser.component';
import ThemeProvider from '../../providers/Theme.provider';

describe('<NavigationBarUser />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <NavigationBarUser />
      </ThemeProvider>
    );
    const container = getByTestId('navigationBarUser');
    expect(container).not.toBe(null);
  });
  test('Fails without ThemeProvider', () => {
    expect(() => render(<NavigationBarUser />)).toThrowError(
      `Can't use "useTheme" without an ThemeProvider!`
    );
  });
});
