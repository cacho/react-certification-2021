import React from 'react';
import { act, render, fireEvent } from '@testing-library/react';
import NavigationBarSearch from './NavigationBarSearch.component';
import SearchProvider from '../../providers/Search.provider';
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
    expect(() =>
      render(
        <ThemeProvider>
          <NavigationBarSearch />
        </ThemeProvider>
      )
    ).toThrowError(`Can't use "useSearch" without an SearchProvider!`);
  });
  test('Fails without ThemeProvider', () => {
    expect(() =>
      render(
        <SearchProvider>
          <NavigationBarSearch />
        </SearchProvider>
      )
    ).toThrowError(`Can't use "useTheme" without an ThemeProvider!`);
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
    const termChangedMock = jest.fn();
    const { getByTestId } = render(
      <SearchProvider termChanged={termChangedMock()}>
        <ThemeProvider>
          <NavigationBarSearch />
        </ThemeProvider>
      </SearchProvider>
    );
    const form = getByTestId('NavigationBarSearch');
    const searchField = form.querySelector('input.form-control.me-2');
    fireEvent.change(searchField);

    expect(termChangedMock).toBeCalled();
  });
  test('Triggers onChange events empity value', () => {
    const termChangedMock = jest.fn();
    const { getByTestId } = render(
      <SearchProvider termChanged={termChangedMock()}>
        <ThemeProvider>
          <NavigationBarSearch />
        </ThemeProvider>
      </SearchProvider>
    );
    const form = getByTestId('NavigationBarSearch');
    const searchField = form.querySelector('input.form-control.me-2');
    act(() => {
      searchField.value = '';
    });
    expect(termChangedMock).toBeCalled();
  });
});
