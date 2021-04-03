import React from 'react';
import { render } from '@testing-library/react';
import { act, renderHook } from '@testing-library/react-hooks';

import { Simulate } from 'react-dom/test-utils';
import NavigationBarSearch from './NavigationBarSearch.component';
import SearchProvider, { useSearch } from '../../providers/Search.provider';
import { useTheme } from '../../providers/Theme.provider';

jest.mock('../../providers/Theme.provider');

describe('<NavigationBarSearch />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test('Renders correctly', () => {
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(
      <SearchProvider>
        <NavigationBarSearch />
      </SearchProvider>
    );
    expect(getByTestId('NavigationBarSearch')).not.toBe(null);
  });
  test('Renders correctly dark', () => {
    useTheme.mockReturnValue({
      state: { selectedTheme: 'dark' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(
      <SearchProvider>
        <NavigationBarSearch />
      </SearchProvider>
    );
    expect(getByTestId('NavigationBarSearch')).not.toBe(null);
  });
  test('Fails without SearchProvider', () => {
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    expect(() => render(<NavigationBarSearch />)).toThrowError(
      `Can't use "useSearch" without an SearchProvider!`
    );
    consoleSpy.mockRestore();
  });
  test('Triggers Submit event', () => {
    const searchSubmitedMock = jest.fn();
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(
      <SearchProvider searchSubmited={searchSubmitedMock()}>
        <NavigationBarSearch />
      </SearchProvider>
    );
    const form = getByTestId('NavigationBarSearch');
    act(() => {
      form.dispatchEvent(new Event('submit'));
    });
    expect(searchSubmitedMock).toBeCalled();
  });
  test('Triggers onChange events with value', () => {
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(
      <SearchProvider>
        <NavigationBarSearch />
      </SearchProvider>
    );
    const form = getByTestId('NavigationBarSearch');
    const searchField = form.querySelector('input.form-control.me-2');

    Simulate.change(searchField, { value: 'hola' });
  });
  test('Triggers onChange events empity value', () => {
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(
      <SearchProvider>
        <NavigationBarSearch />
      </SearchProvider>
    );
    const form = getByTestId('NavigationBarSearch');
    const searchField = form.querySelector('input.form-control.me-2');

    Simulate.change(searchField, { value: '' });
  });
  test('Triggers onChange events empity value on provider', () => {
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const wrapper = ({ children }) => <SearchProvider>{children}</SearchProvider>;
    const { result } = renderHook(() => useSearch(), { wrapper });
    render(<NavigationBarSearch />, { wrapper });

    act(() => {
      result.current.dispatch({
        type: 'SEARCH_TERM_CHANGE',
        payload: 'test',
      });
    });

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
