import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';
import SearchProvider, { useSearch } from './Search.provider';

describe('Search Provider', () => {
  test('Search term defaults', () => {
    const mockedDefaults = {
      searchTerm: 'wizeline',
      selectedVideo: {
        id: { videoID: '' },
        snippet: { thumbnails: { high: { url: '' } }, title: '', description: '' },
      },
    };
    const wrapper = ({ children }) => <SearchProvider>{children}</SearchProvider>;
    const { result } = renderHook(() => useSearch(), { wrapper });

    expect(result.current.searchState.searchTerm).toEqual(mockedDefaults.searchTerm);
    expect(result.current.searchState.selectedVideo).toEqual(
      mockedDefaults.selectedVideo
    );
  });
  test('Updates the searchterm', () => {
    const mockedPayload = 'another Term';
    const wrapper = ({ children }) => <SearchProvider>{children}</SearchProvider>;
    const { result } = renderHook(() => useSearch(), { wrapper });

    act(() => {
      result.current.dispatch({ type: 'SEARCH_TERM_CHANGE', payload: mockedPayload });
    });

    expect(result.current.searchState.searchTerm).toBe(mockedPayload);
  });
  test('Updates selected video', () => {
    const mockedPayload = {
      id: { videoID: 'testVideo' },
      snippet: {
        thumbnails: { high: { url: 'url' } },
        title: 'title',
        description: 'description',
      },
    };
    const wrapper = ({ children }) => <SearchProvider>{children}</SearchProvider>;
    const { result } = renderHook(() => useSearch(), { wrapper });

    act(() => {
      result.current.dispatch({ type: 'UPDATE_SELECTED_VIDEO', payload: mockedPayload });
    });

    expect(result.current.searchState.selectedVideo).toEqual(mockedPayload);
  });

  test('Catch invalid type option on reducer', () => {
    const wrapper = ({ children }) => <SearchProvider>{children}</SearchProvider>;
    const { result } = renderHook(() => useSearch(), { wrapper });
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    try {
      act(() => {
        result.current.dispatch({ type: 'INVALID_SEARCH_TYPE' });
      });
    } catch (error) {
      expect(error.message).toBe('Invalid Operation');
    }
    consoleSpy.mockRestore();
  });
});
