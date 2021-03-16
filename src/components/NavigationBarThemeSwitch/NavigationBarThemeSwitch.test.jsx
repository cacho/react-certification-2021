import React from 'react';
import { render } from '@testing-library/react';
import NavigationBarThemeSwitch from './NavigationBarThemeSwitch.component';
import ThemeProvider from '../../providers/Theme.provider';

describe('<NavigationBarThemeSwitch />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <NavigationBarThemeSwitch />
      </ThemeProvider>
    );
    const label = getByTestId('NavigationBarThemeSwitch');
    expect(label).not.toBe(null);
  });
});
