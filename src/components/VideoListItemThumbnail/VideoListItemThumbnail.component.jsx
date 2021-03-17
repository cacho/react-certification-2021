import React from 'react';
import Styled from './VideoListItemThumbnail.styled';

function VideoListItemThumbnail({ images, title }) {
  return (
    <Styled.Container data-testid="VideoListItemThumbnail">
      <Styled.Image src={images.high.url} alt={title} />
    </Styled.Container>
  );
}

export default VideoListItemThumbnail;
