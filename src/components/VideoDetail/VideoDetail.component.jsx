import React from 'react';
import Styled from './VideoDetail.styled';
import { useSearch } from '../../providers/Search.provider';

import { storage } from '../../utils/storage';
import { AUTH_USER_FAVORITES } from '../../utils/constants';

function VideoDetail({ handle, isVideoDetailVisible }) {
  const { searchState } = useSearch();
  const { selectedVideo } = searchState;
  const saveToFavorites = () => {
    try {
      let storedFavorites = [];
      storedFavorites = storage.get(AUTH_USER_FAVORITES);
      const found = storedFavorites.find(
        (element) => element.etag === selectedVideo.etag
      );
      if (!found) {
        storedFavorites.push(selectedVideo);
        storage.set(AUTH_USER_FAVORITES, storedFavorites);
      }
    } catch (error) {
      storage.set(AUTH_USER_FAVORITES, [selectedVideo]);
    }
  };
  return (
    <Styled.Container videoDetail={isVideoDetailVisible} data-testid="VideoDetail">
      <div>
        <button type="button" onClick={handle}>
          Close Detail
        </button>
      </div>
      <div>
        <button type="button" onClick={saveToFavorites}>
          Add to Favorites
        </button>
      </div>
      <Styled.VideoContainer>
        <Styled.VideoiFrame
          title="videoFrame"
          src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}?feature=oembed`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Styled.VideoContainer>
      <Styled.VideoTitle>{selectedVideo.snippet.title}</Styled.VideoTitle>
      <Styled.VideoDescription>
        {selectedVideo.snippet.description}
      </Styled.VideoDescription>
    </Styled.Container>
  );
}

export default VideoDetail;
