import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import VideoDetail from './VideoDetail.component';
import SearchProvider from '../../providers/Search.provider';

describe('<VideoDetail />', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  test('Renders correctly', () => {
    const { getByTestId } = render(
      <SearchProvider>
        <VideoDetail />
      </SearchProvider>
    );
    expect(getByTestId('VideoDetail')).not.toBe(null);
  });
});
