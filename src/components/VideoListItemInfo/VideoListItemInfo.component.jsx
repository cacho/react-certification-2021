import React from 'react';
import Styled from './VideoListItemInfo.styled';
import { htmlentities } from '../../utils/htmlEntities';

function VideoListIteminfo({ title, description }) {
  return (
    <Styled.Body data-testid="VideoListItemInfo">
      <Styled.Title>{htmlentities.decode(title)}</Styled.Title>
      <Styled.Text>{description}</Styled.Text>
    </Styled.Body>
  );
}

export default VideoListIteminfo;
