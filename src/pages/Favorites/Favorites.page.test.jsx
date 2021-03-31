import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Favorites from './Favorites.page';
import SearchProvider from '../../providers/Search.provider';
import ThemeProvider from '../../providers/Theme.provider';
import mockToUseYoutubeAPI from '../../utils/mocks/youTubeResponse.json';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';

jest.mock('../../hooks/useYoutubeAPI');

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
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <Favorites items={[mockToUseYoutubeAPI.items[1]]} />
        </ThemeProvider>
      </SearchProvider>
    );
    const container = getByTestId('FavoritesPage');
    expect(container.className).toContain('container');
    expect(container.className).toContain('bg-light');
    consoleSpy.mockRestore();
  });

  test('VideoDetail is not visible', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <Favorites />
        </ThemeProvider>
      </SearchProvider>
    );
    const container = getByTestId('FavoritesPage');
    expect(container).not.toBe(null);
    expect(container.lastChild.childNodes.length).toEqual(1);
    consoleSpy.mockRestore();
  });

  test('VideoDetail shows on click', () => {
    // Object.defineProperty(window, 'localStorage', {
    //   value: {
    //     getItem: jest.fn(() => {
    //       return {
    //         favorites: [mockToUseYoutubeAPI.items[1]],
    //       };
    //     }),
    //     setItem: jest.fn(() => null),
    //   },
    //   writable: true,
    // });
    // const { getByTestId } = render(
    //   <SearchProvider>
    //     <ThemeProvider>
    //       <Favorites items={[mockToUseYoutubeAPI.items[1]]} />
    //     </ThemeProvider>
    //   </SearchProvider>
    // );
    // const container = getByTestId('FavoritesPage');
    // expect(container).not.toBe(null);
    // expect(container.lastChild.childNodes.length).toEqual(1);
    // const videoList = getByTestId('VideoList');
    // const firstVideoElement = videoList.firstChild;
    // fireEvent.click(firstVideoElement.firstChild);
    // expect(container.lastChild.childNodes.length).toEqual(2);
  });
  test('VideoDetail hides on button click', () => {
    // useYoutubeAPI.mockReturnValue({ loading: false, searchResult: mockToUseYoutubeAPI });
    // const { getByTestId } = render(
    //   <SearchProvider>
    //     <ThemeProvider>
    //       <Favorites />
    //     </ThemeProvider>
    //   </SearchProvider>
    // );
    // const container = getByTestId('FavoritesPage');
    // expect(container).not.toBe(null);
    // expect(container.lastChild.childNodes.length).toEqual(1);
    // const videoList = getByTestId('VideoList');
    // const firstVideoElement = videoList.firstChild;
    // fireEvent.click(firstVideoElement.firstChild);
    // expect(container.lastChild.childNodes.length).toEqual(2);
    // const videoDetailCloseBtn = getByTestId('CloseDetailButton');
    // fireEvent.click(videoDetailCloseBtn);
    // expect(container.lastChild.childNodes.length).toEqual(1);
  });
  test('VideoDetail saveToFavorites on button click', () => {
    // Object.defineProperty(window, 'localStorage', {
    //   value: {
    //     getItem: jest.fn(() => null),
    //     setItem: jest.fn(() => null),
    //   },
    //   writable: true,
    // });
    // useYoutubeAPI.mockReturnValue({ loading: false, searchResult: mockToUseYoutubeAPI });
    // const { getByTestId } = render(
    //   <SearchProvider>
    //     <ThemeProvider>
    //       <Favorites />
    //     </ThemeProvider>
    //   </SearchProvider>
    // );
    // const container = getByTestId('FavoritesPage');
    // expect(container).not.toBe(null);
    // expect(container.lastChild.childNodes.length).toEqual(1);
    // const videoList = getByTestId('VideoList');
    // const firstVideoElement = videoList.firstChild;
    // fireEvent.click(firstVideoElement.firstChild);
    // expect(container.lastChild.childNodes.length).toEqual(2);
    // const saveToFavoritesBtn = getByTestId('SaveToFavoritesButton');
    // fireEvent.click(saveToFavoritesBtn);
    // expect(window.localStorage.setItem).toHaveBeenCalledTimes(1);
  });
});
