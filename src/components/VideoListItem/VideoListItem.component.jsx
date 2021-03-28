import React from 'react';
import VideoListItemThumbnail from '../VideoListItemThumbnail';
import VideoListIteminfo from '../VideoListItemInfo';
import Styled from './VideoListItem.styled';
import { useSearch } from '../../providers/Search.provider';

function VideoListItem({ item, handler }) {
  const { dispatch } = useSearch();
  const updateVideo = () => {
    handler();
    dispatch({
      type: 'UPDATE_SELECTED_VIDEO',
      payload: item,
    });
  };

  return (
    <Styled.Column data-testid="VideoListItem">
      <Styled.Row onClick={updateVideo}>
        <VideoListItemThumbnail
          images={item.snippet.thumbnails}
          title={item.snippet.title}
        />
        <VideoListIteminfo
          title={item.snippet.title}
          description={item.snippet.description}
        />
      </Styled.Row>
    </Styled.Column>
  );
}

export default VideoListItem;
