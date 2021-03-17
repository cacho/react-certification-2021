import React from 'react';
import { render } from '@testing-library/react';
import Layout from './Layout.component';
import SearchProvider from '../../providers/Search.provider';
import ThemeProvider from '../../providers/Theme.provider';

describe('<Layout />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      </SearchProvider>
    );
    const label = getByTestId('Layout');
    expect(label).not.toBe(null);
  });
  test('Fails without SearchProvider', () => {
    expect(() =>
      render(
        <ThemeProvider>
          <Layout />
        </ThemeProvider>
      )
    ).toThrowError(`Can't use "useSearch" without an SearchProvider!`);
  });
  test('Fails without ThemeProvider', () => {
    expect(() =>
      render(
        <SearchProvider>
          <Layout />
        </SearchProvider>
      )
    ).toThrowError(`Can't use "useTheme" without an ThemeProvider!`);
  });
});
