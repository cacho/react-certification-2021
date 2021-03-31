import React from 'react';
import { render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';
import { Simulate } from 'react-dom/test-utils';
import NavigationBarSearch from './NavigationBarSearch.component';
import SearchProvider, { useSearch } from '../../providers/Search.provider';
import ThemeProvider from '../../providers/Theme.provider';

describe('<NavigationBarSearch />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <NavigationBarSearch />
        </ThemeProvider>
      </SearchProvider>
    );
    expect(getByTestId('NavigationBarSearch')).not.toBe(null);
  });
  test('Fails without SearchProvider', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    expect(() =>
      render(
        <ThemeProvider>
          <NavigationBarSearch />
        </ThemeProvider>
      )
    ).toThrowError(`Can't use "useSearch" without an SearchProvider!`);
    consoleSpy.mockRestore();
  });
  test('Fails without ThemeProvider', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});

    expect(() =>
      render(
        <SearchProvider>
          <NavigationBarSearch />
        </SearchProvider>
      )
    ).toThrowError(`Can't use "useTheme" without an ThemeProvider!`);
    consoleSpy.mockRestore();
  });
  test('Triggers Submit event', () => {
    const searchSubmitedMock = jest.fn();
    const { getByTestId } = render(
      <SearchProvider searchSubmited={searchSubmitedMock()}>
        <ThemeProvider>
          <NavigationBarSearch />
        </ThemeProvider>
      </SearchProvider>
    );
    const form = getByTestId('NavigationBarSearch');
    act(() => {
      form.dispatchEvent(new Event('submit'));
    });
    expect(searchSubmitedMock).toBeCalled();
  });
  test('Triggers onChange events with value', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <NavigationBarSearch />
        </ThemeProvider>
      </SearchProvider>
    );
    const form = getByTestId('NavigationBarSearch');
    const searchField = form.querySelector('input.form-control.me-2');

    Simulate.change(searchField, { value: 'hola' });
  });
  test('Triggers onChange events empity value', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <NavigationBarSearch />
        </ThemeProvider>
      </SearchProvider>
    );
    const form = getByTestId('NavigationBarSearch');
    const searchField = form.querySelector('input.form-control.me-2');

    Simulate.change(searchField, { value: '' });
  });
  test('Triggers onChange events empity value on provider', async () => {
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <NavigationBarSearch />
        </ThemeProvider>
      </SearchProvider>
    );
    const wrapper = ({ children }) => <SearchProvider>{children}</SearchProvider>;
    const { result } = renderHook(() => useSearch(), { wrapper });
    console.log(result.current);
    const form = getByTestId('NavigationBarSearch');
    const searchField = form.querySelector('input.form-control.me-2');

    Simulate.change(searchField, { value: '' });

    setTimeout(() => {
      expect(result.current.searchState.seachTerm).toEqual('');
    }, 1100);
    // await WaitForNextUpdate;
    // expect(result.current.searchState.seachTerm).toEqual('');
  });
});
