import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter } from 'react-router-dom';
import NavigationBarBrand from './NavigationBarBrand.component';

describe('<NavigationBarBrand />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <HashRouter>
        <NavigationBarBrand />
      </HashRouter>
    );
    expect(getByTestId('NavigationBarBrand')).not.toBe(null);
  });
});
