import React from 'react';
import { act, render } from '@testing-library/react';
import VideoListItem from './VideoListItem.component';
import SearchProvider from '../../providers/Search.provider';

describe('<VideoListItem />', () => {
  const mockedData = {
    id: { videoID: '' },
    snippet: { thumbnails: { high: { url: '' } }, title: '', description: '' },
  };
  const mockedHandler = jest.fn();

  test('Renders correctly', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <VideoListItem item={mockedData} handler={mockedData} />
      </SearchProvider>
    );
    const container = getByTestId('VideoListItem');
    expect(container).not.toBe(null);
  });
  test('Triggers function on click', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <VideoListItem handler={mockedHandler} item={mockedData} />
      </SearchProvider>
    );
    const wrapper = getByTestId('VideoListItem');
    const card = wrapper.querySelector('.card');
    act(() => {
      card.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(mockedHandler).toBeCalled();
  });
});
