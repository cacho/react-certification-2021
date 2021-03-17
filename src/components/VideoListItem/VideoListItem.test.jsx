import React from 'react';
import { act, render } from '@testing-library/react';
import VideoListItem from './VideoListItem.component';
import SearchProvider from '../../providers/Search.provider';

describe('<VideoListItem />', () => {
  const mockedData = {
    videoID: 'testingVid',
    thumbnails: { high: { url: '' } },
    title: '',
    description: '',
    handler: jest.fn(),
  };
  test('Renders correctly', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <VideoListItem
          title={mockedData.title}
          description={mockedData.description}
          thumbnails={mockedData.thumbnails}
        />
      </SearchProvider>
    );
    const container = getByTestId('VideoListItem');
    expect(container).not.toBe(null);
  });
  test('Triggers function on click', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <VideoListItem
          title={mockedData.title}
          description={mockedData.description}
          thumbnails={mockedData.thumbnails}
          handler={mockedData.handler}
          videoID={mockedData.videoID}
        />
      </SearchProvider>
    );
    const wrapper = getByTestId('VideoListItem');
    const card = wrapper.querySelector('.card');
    act(() => {
      card.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(mockedData.handler).toBeCalled();
  });
});
