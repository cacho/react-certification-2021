import React from 'react';
import { render } from '@testing-library/react';
import { act } from '@testing-library/react-hooks';

import { Simulate } from 'react-dom/test-utils';
import debounce from 'debounce';
import NavigationBarSearch from './NavigationBarSearch.component';
import { useSearch } from '../../providers/Search.provider';
import { useTheme } from '../../providers/Theme.provider';

jest.useFakeTimers();
jest.mock('../../providers/Theme.provider');
jest.mock('../../providers/Search.provider');
jest.mock('debounce');

describe('<NavigationBarSearch />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test('Renders correctly', () => {
    useSearch.mockReturnValue({
      state: {
        searchTerm: 'wizeline',
        selectedVideo: {
          id: { videoID: '' },
          snippet: { thumbnails: { high: { url: '' } }, title: '', description: '' },
        },
      },
      dispatch: jest.fn(),
    });
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<NavigationBarSearch />);
    expect(getByTestId('NavigationBarSearch')).not.toBe(null);
  });
  test('Renders correctly dark', () => {
    useSearch.mockReturnValue({
      state: {
        searchTerm: 'wizeline',
        selectedVideo: {
          id: { videoID: '' },
          snippet: { thumbnails: { high: { url: '' } }, title: '', description: '' },
        },
      },
      dispatch: jest.fn(),
    });
    useTheme.mockReturnValue({
      state: { selectedTheme: 'dark' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<NavigationBarSearch />);
    expect(getByTestId('NavigationBarSearch')).not.toBe(null);
  });

  test('Prevent default Submit event', () => {
    useSearch.mockReturnValue({
      state: {
        searchTerm: 'wizeline',
        selectedVideo: {
          id: { videoID: '' },
          snippet: { thumbnails: { high: { url: '' } }, title: '', description: '' },
        },
      },
      dispatch: jest.fn(),
    });
    const searchSubmitedMock = jest.fn();
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<NavigationBarSearch onSubmit={searchSubmitedMock} />);
    const form = getByTestId('NavigationBarSearch');
    act(() => {
      form.dispatchEvent(new Event('submit'));
    });
    expect(searchSubmitedMock).not.toBeCalled();
  });
  test('Triggers onChange events with value', () => {
    useSearch.mockReturnValue({
      state: {
        searchTerm: 'wizeline',
        selectedVideo: {
          id: { videoID: '' },
          snippet: { thumbnails: { high: { url: '' } }, title: '', description: '' },
        },
      },
      dispatch: jest.fn(),
    });
    debounce.mockImplementation(() => jest.fn());
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<NavigationBarSearch />);
    const form = getByTestId('NavigationBarSearch');
    const searchField = form.querySelector('input.form-control.me-2');
    Simulate.change(searchField, { value: 'hola' });
  });
  test('Triggers onChange events empity value', () => {
    useSearch.mockReturnValue({
      state: {
        searchTerm: 'wizeline',
        selectedVideo: {
          id: { videoID: '' },
          snippet: { thumbnails: { high: { url: '' } }, title: '', description: '' },
        },
      },
      dispatch: jest.fn(),
    });
    debounce.mockImplementation(() => jest.fn());
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<NavigationBarSearch />);
    const form = getByTestId('NavigationBarSearch');
    const searchField = form.querySelector('input.form-control.me-2');

    Simulate.change(searchField, { value: '' });
    jest.runAllTimers();
  });
});
