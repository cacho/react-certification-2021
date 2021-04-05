import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import VideoDetail from './VideoDetail.component';
import { useSearch } from '../../providers/Search.provider';
import mockToUseYoutubeAPI from '../../utils/mocks/youTubeResponse.json';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import { useTheme } from '../../providers/Theme.provider';
import { storage } from '../../utils/storage';

jest.mock('../../hooks/useYoutubeAPI');
jest.mock('../../providers/Theme.provider');
jest.mock('../../utils/storage');
jest.mock('../../providers/Search.provider');

describe('<VideoDetail />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Renders correctly', () => {
    useSearch.mockReturnValue({
      searchState: {
        searchTerm: 'wizeline',
        selectedVideo: {
          id: { videoID: '' },
          snippet: { thumbnails: { high: { url: '' } }, title: '', description: '' },
        },
      },
    });
    const { getByTestId } = render(<VideoDetail />);
    expect(getByTestId('VideoDetail')).not.toBe(null);
  });
  test('VideoDetail saveToFavorites creating storage', () => {
    useYoutubeAPI.mockReturnValue({ loading: false, searchResult: mockToUseYoutubeAPI });
    useSearch.mockReturnValue({
      searchState: {
        searchTerm: 'wizeline',
        selectedVideo: {
          id: { videoID: '' },
          snippet: { thumbnails: { high: { url: '' } }, title: '', description: '' },
        },
      },
    });
    storage.get.mockReturnValue(null);
    storage.set.mockReturnValue(jest.fn());
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<VideoDetail />);
    const saveToFavoritesBtn = getByTestId('SaveToFavoritesButton');
    fireEvent.click(saveToFavoritesBtn);
    expect(storage.set).toHaveBeenCalledTimes(1);
  });
  test('VideoDetail saveToFavorites on existing storage', () => {
    useSearch.mockReturnValue({
      searchState: {
        searchTerm: 'wizeline',
        selectedVideo: {
          id: { videoID: '' },
          snippet: { thumbnails: { high: { url: '' } }, title: '', description: '' },
        },
      },
    });
    storage.get.mockReturnValue([mockToUseYoutubeAPI.items[1]]);
    storage.set.mockReturnValue(jest.fn());
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<VideoDetail />);
    const saveToFavoritesBtn = getByTestId('SaveToFavoritesButton');
    fireEvent.click(saveToFavoritesBtn);
    expect(storage.set).toHaveBeenCalledTimes(1);
  });
  test('VideoDetail saveToFavorites avoid saving duplicates', () => {
    useSearch.mockReturnValue({
      searchState: {
        searchTerm: 'wizeline',
        selectedVideo: mockToUseYoutubeAPI.items[1],
      },
    });
    storage.get.mockReturnValue([mockToUseYoutubeAPI.items[1]]);
    storage.set.mockReturnValue(jest.fn());
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<VideoDetail />);
    const saveToFavoritesBtn = getByTestId('SaveToFavoritesButton');
    fireEvent.click(saveToFavoritesBtn);
    expect(storage.set).toHaveBeenCalledTimes(0);
  });
});
