import React from 'react';
import { fireEvent, render } from '@testing-library/react';
// import { mockComponent } from 'react-dom/test-utils';
import Home from './Home.page';
import SearchProvider from '../../providers/Search.provider';
import ThemeProvider from '../../providers/Theme.provider';
import mockToUseYoutubeAPI from '../../utils/mocks/youTubeResponse.json';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';

jest.mock('../../hooks/useYoutubeAPI');
// jest.mock('../../providers/Theme.provider');

describe('<Home />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test('Renders Loading at start', () => {
    useYoutubeAPI.mockReturnValue({ loading: true, searchResult: null });
    const { getByText } = render(
      <SearchProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </SearchProvider>
    );
    const label = getByText('Loading ....');
    expect(label).not.toBe(null);
  });
  test('Renders Light Mode', () => {
    useYoutubeAPI.mockReturnValue({ loading: false, searchResult: mockToUseYoutubeAPI });
    // useTheme.mockReturnValue({ selectedTheme: 'dark', toggleSelectedTheme: jest.fn() });
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </SearchProvider>
    );
    const container = getByTestId('Home');
    expect(container.className).toContain('container');
    expect(container.className).toContain('bg-light');
  });
  // test('Renders Dark Mode', () => {
  //   useYoutubeAPI.mockReturnValue({ loading: false, searchResult: mockToUseYoutubeAPI });
  //   // useTheme.mockReturnValue({ selectedTheme: 'dark', toggleSelectedTheme: jest.fn() });
  //   const { getByTestId } = render(
  //     <SearchProvider>
  //       <ThemeProvider selectedTheme="dark">
  //         <Home />
  //       </ThemeProvider>
  //     </SearchProvider>
  //   );
  //   const container = getByTestId('Home');
  //   expect(container.className).toContain('container');
  //   expect(container.className).toContain('bg-dark');
  // });

  test('Renders home after loading...', () => {
    useYoutubeAPI.mockReturnValue({ loading: false, searchResult: mockToUseYoutubeAPI });
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </SearchProvider>
    );

    const label = getByTestId('Home');
    expect(label).not.toBe(null);
  });
  test('VideoDetail is not visible', () => {
    useYoutubeAPI.mockReturnValue({ loading: false, searchResult: mockToUseYoutubeAPI });
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </SearchProvider>
    );
    const container = getByTestId('Home');
    expect(container).not.toBe(null);
    expect(container.lastChild.childNodes.length).toEqual(1);
  });
  test('VideoDetail shows on click', () => {
    useYoutubeAPI.mockReturnValue({ loading: false, searchResult: mockToUseYoutubeAPI });
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </SearchProvider>
    );
    const container = getByTestId('Home');
    expect(container).not.toBe(null);
    expect(container.lastChild.childNodes.length).toEqual(1);
    const videoList = getByTestId('VideoList');
    const firstVideoElement = videoList.firstChild;
    fireEvent.click(firstVideoElement.firstChild);
    expect(container.lastChild.childNodes.length).toEqual(2);
  });
  test('VideoDetail hides on button click', () => {
    useYoutubeAPI.mockReturnValue({ loading: false, searchResult: mockToUseYoutubeAPI });
    const { getByTestId } = render(
      <SearchProvider>
        <ThemeProvider>
          <Home />
        </ThemeProvider>
      </SearchProvider>
    );
    const container = getByTestId('Home');
    expect(container).not.toBe(null);
    expect(container.lastChild.childNodes.length).toEqual(1);
    const videoList = getByTestId('VideoList');
    const firstVideoElement = videoList.firstChild;
    fireEvent.click(firstVideoElement.firstChild);
    expect(container.lastChild.childNodes.length).toEqual(2);
    const videoDetailCloseBtn = getByTestId('VideoDetail').firstChild.firstChild;
    fireEvent.click(videoDetailCloseBtn);
    expect(container.lastChild.childNodes.length).toEqual(1);
  });
});
