import React from 'react';
import { fireEvent, render } from '@testing-library/react';
// import { mockComponent } from 'react-dom/test-utils';
import Home from './Home.page';
import SearchProvider from '../../providers/Search.provider';
import mockuseYoutubeAPI from '../../utils/mocks/youTubeResponse.json';

jest.mock('../../hooks/useYoutubeAPI', () => () => ({
  loading: false,
  searchResult: mockuseYoutubeAPI,
}));

beforeEach(() => {
  jest.clearAllMocks();
});
describe('<Home />', () => {
  // test('Renders Loading at start', () => {
  //   const { getByText } = render(
  //     <SearchProvider>
  //       <Home />
  //     </SearchProvider>
  //   );
  //   const label = getByText('Loading ....');
  //   expect(label).not.toBe(null);
  // });

  test('Renders home after loading...', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <Home />
      </SearchProvider>
    );

    const label = getByTestId('Home');
    expect(label).not.toBe(null);
  });
  test('VideoDetail is not visible', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <Home />
      </SearchProvider>
    );
    const container = getByTestId('Home');
    expect(container).not.toBe(null);
    expect(container.lastChild.childNodes.length).toEqual(1);
  });
  test('VideoDetail shows on click', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <Home />
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
    const { getByTestId } = render(
      <SearchProvider>
        <Home />
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
