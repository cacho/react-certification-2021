import React from 'react';
import { fireEvent, render } from '@testing-library/react';
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

  test('Fails without provider', () => {
    expect(() => render(<NavigationBarThemeSwitch />)).toThrowError(
      `Can't use "useTheme" without an ThemeProvider!`
    );
  });

  test('Handle change event ', () => {
    const mockFunction = jest.fn();
    const { getByTestId } = render(
      <ThemeProvider>
        <NavigationBarThemeSwitch onChange={mockFunction()} />
      </ThemeProvider>
    );
    const container = getByTestId('NavigationBarThemeSwitch');
    const input = container.querySelector('input#themeSwitchOptions');
    fireEvent.click(input);
    expect(mockFunction).toBeCalledTimes(1);
  });
});
