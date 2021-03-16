import React from 'react';
import { render } from '@testing-library/react';
import NavigationBar from './NavigationBar.component';
import SearchProvider from '../../providers/Search.provider';
import ThemeProvider from '../../providers/Theme.provider';

describe('<NavigationBar />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <NavigationBar />
        </ThemeProvider>
      </SearchProvider>
    );
    const label = getByTestId('navigationBar');
    expect(label).not.toBe(null);
  });
});
