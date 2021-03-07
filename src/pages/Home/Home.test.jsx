import React from 'react';
import { render, act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import Home from './Home.page';
import SearchProvider, { useSearch } from '../../providers/Search.provider';

describe('<Home />', () => {
  test('Renders Loading at start', () => {
    const { getByText } = render(
      <SearchProvider>
        <Home />
      </SearchProvider>
    );
    const label = getByText('Loading ....');
    expect(label).not.toBe(null);
  });

  test('Renders home after loading...', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <Home />
      </SearchProvider>
    );
    setTimeout(() => {
      const label = getByTestId('Home');
      expect(label).not.toBe(null);
    }, 500);
  });
});
