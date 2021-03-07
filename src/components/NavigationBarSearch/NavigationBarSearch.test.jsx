import React from 'react';
import { act, render } from '@testing-library/react';
import NavigationBarSearch from './NavigationBarSearch.component';
import SearchProvider from '../../providers/Search.provider';

describe('<NavigationBarSearch />', () => {
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <NavigationBarSearch />
      </SearchProvider>
    );
    expect(getByTestId('NavigationBarSearch')).not.toBe(null);
  });
  test('Triggers Submit event', () => {
    const searchSubmitedMock = jest.fn();
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
    const termChangedMock = jest.fn();
    const { getByTestId } = render(
      <SearchProvider termChanged={termChangedMock()}>
        <NavigationBarSearch />
      </SearchProvider>
    );
    const form = getByTestId('NavigationBarSearch');
    const searchField = form.querySelector('input.form-control.me-2');
    act(() => {
      searchField.value = 'new';
    });
    expect(termChangedMock).toBeCalled();
  });
  test('Triggers onChange events empity value', () => {
    const termChangedMock = jest.fn();
    const { getByTestId } = render(
      <SearchProvider termChanged={termChangedMock()}>
        <NavigationBarSearch />
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
