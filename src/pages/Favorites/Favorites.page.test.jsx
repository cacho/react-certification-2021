import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Favorites from './Favorites.page';
import SearchProvider from '../../providers/Search.provider';
import { useTheme } from '../../providers/Theme.provider';
import mockToUseYoutubeAPI from '../../utils/mocks/youTubeResponse.json';
import { storage } from '../../utils/storage';

jest.mock('../../hooks/useYoutubeAPI');
jest.mock('../../providers/Theme.provider');
jest.mock('../../utils/storage');

describe('<Home />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Renders Light Mode', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => {
          return {
            favorites: [mockToUseYoutubeAPI.items[1]],
          };
        }),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    const { getByTestId } = render(
      <SearchProvider>
        <Favorites items={[mockToUseYoutubeAPI.items[1]]} />
      </SearchProvider>
    );
    const container = getByTestId('FavoritesPage');
    expect(container.className).toContain('container');
    expect(container.className).toContain('bg-light');
    consoleSpy.mockRestore();
  });
  test('Renders Dark Mode', () => {
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: jest.fn(() => {
          return {
            favorites: [mockToUseYoutubeAPI.items[1]],
          };
        }),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
    useTheme.mockReturnValue({
      state: { selectedTheme: 'dark' },
      dispatch: jest.fn(),
    });
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    const { getByTestId } = render(
      <SearchProvider>
        <Favorites items={[mockToUseYoutubeAPI.items[1]]} />
      </SearchProvider>
    );
    const container = getByTestId('FavoritesPage');
    expect(container.className).toContain('container');
    expect(container.className).toContain('bg-dark');
    consoleSpy.mockRestore();
  });

  test('VideoDetail is not visible', () => {
    useTheme.mockReturnValue({
      state: { selectedTheme: 'dark' },
      dispatch: jest.fn(),
    });
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    const { getByTestId } = render(
      <SearchProvider>
        <Favorites />
      </SearchProvider>
    );
    const container = getByTestId('FavoritesPage');
    expect(container).not.toBe(null);
    try {
      getByTestId('VideoDetail');
    } catch (error) {
      expect(error).not.toBe(null);
    }
    consoleSpy.mockRestore();
  });

  test('VideoDetail shows on click', () => {
    storage.get.mockReturnValue([mockToUseYoutubeAPI.items[1]]);
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(
      <SearchProvider>
        <Favorites />
      </SearchProvider>
    );
    const container = getByTestId('FavoritesPage');
    expect(container).not.toBe(null);
    expect(container.lastChild.childNodes.length).toEqual(1);
    const videoList = getByTestId('VideoList');
    const firstVideoElement = videoList.firstChild;
    fireEvent.click(firstVideoElement.firstChild);
    expect(container.lastChild.childNodes.length).toEqual(2);
    expect(getByTestId('VideoDetail')).not.toBe(null);
  });
  test('VideoDetail hides on button click', () => {
    storage.get.mockReturnValue([mockToUseYoutubeAPI.items[1]]);
    useTheme.mockReturnValue({
      state: { selectedTheme: 'light' },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(
      <SearchProvider>
        <Favorites />
      </SearchProvider>
    );
    const container = getByTestId('FavoritesPage');
    expect(container).not.toBe(null);
    expect(container.lastChild.childNodes.length).toEqual(1);
    const videoList = getByTestId('VideoList');
    const firstVideoElement = videoList.firstChild;
    fireEvent.click(firstVideoElement.firstChild);
    expect(container.lastChild.childNodes.length).toEqual(2);
    const videoDetailCloseBtn = getByTestId('CloseDetailButton');
    fireEvent.click(videoDetailCloseBtn);
    expect(container.lastChild.childNodes.length).toEqual(1);
  });
});
