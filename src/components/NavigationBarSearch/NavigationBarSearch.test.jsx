import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { act, renderHook, WaitForNextUpdate } from '@testing-library/react-hooks';

import userEvent from '@testing-library/user-event';
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
    const wrapper = ({ children }) => <SearchProvider>{children}</SearchProvider>;
    const { result } = renderHook(() => useSearch(), { wrapper });
    render(
      <ThemeProvider>
        <NavigationBarSearch />
      </ThemeProvider>,
      { wrapper }
    );

    act(() => {
      result.current.dispatch({
        type: 'SEARCH_TERM_CHANGE',
        payload: 'test',
      });
    });

    await WaitForNextUpdate;
    expect(result.current.searchState.searchTerm).toEqual('test');
  });
  test('UseSearch throw error', async () => {
    const wrapper = ({ children }) => <SearchProvider>{children}</SearchProvider>;
    const { result } = renderHook(() => useSearch(), { wrapper });

    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    try {
      act(() =>
        result.current.dispatch({
          type: 'NON_EXISTING_TYPE',
          payload: 'test',
        })
      );
    } catch (error) {
      expect(error).toEqual('Invalid operation');
    }

    consoleSpy.mockRestore();
  });
});
