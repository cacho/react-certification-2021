import React from 'react';
import VideoListItemThumbnail from '../VideoListItemThumbnail';
import VideoListIteminfo from '../VideoListItemInfo';
import Styled from './VideoListItem.styled';
import { useSearch } from '../../providers/Search.provider';

function VideoListItem({ videoID, thumbnails, title, description, handler }) {
  const { dispatch } = useSearch();
  const updateVideo = () => {
    handler();
    dispatch({
      type: 'UPDATE_SELECTED_VIDEO',
      payload: { id: videoID, title, description },
    });
  };

  return (
    <Styled.Column data-testid="VideoListItem">
      <Styled.Row onClick={updateVideo}>
        <VideoListItemThumbnail images={thumbnails} title={title} />
        <VideoListIteminfo title={title} description={description} />
      </Styled.Row>
    </Styled.Column>
  );
}

export default VideoListItem;
