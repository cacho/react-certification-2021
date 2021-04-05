import React from 'react';
import VideoListItem from '../VideoListItem';
import Styled from './VideoList.styled';

function VideoList({ items, handle, isVideoDetailVisible }) {
  return (
    <Styled.Container data-testid="VideoList" videoDetail={isVideoDetailVisible}>
      {items.map((item) => (
        <VideoListItem item={item} key={item.etag} handler={handle} />
      ))}
    </Styled.Container>
  );
}

export default VideoList;
