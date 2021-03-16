import React from 'react';
import { render } from '@testing-library/react';
import NavigationBarMenu from './NavigationBarMenu.component';
import ThemeProvider from '../../providers/Theme.provider';

describe('<NavigationBarMenu />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <ThemeProvider>
        <NavigationBarMenu />
      </ThemeProvider>
    );
    expect(getByTestId('NavigationBarMenu')).not.toBe(null);
  });
});
