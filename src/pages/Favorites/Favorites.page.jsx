import React, { useState } from 'react';
import { useTheme } from '../../providers/Theme.provider';
import Styled from './Favorites.page.styled';
import { storage } from '../../utils/storage';
import { AUTH_USER_FAVORITES } from '../../utils/constants';
import VideoDetail from '../../components/VideoDetail';
import VideoList from '../../components/VideoList';

function FavoritesPage() {
  const { state } = useTheme();
  const { selectedTheme } = state;

  const items = storage.get(AUTH_USER_FAVORITES) || [];
  const [isVideoDetailVisible, setIsVideoDetailVisible] = useState(false);

  const hideVideoDetail = () => {
    setIsVideoDetailVisible(false);
  };
  const showVideoDetail = () => {
    setIsVideoDetailVisible(true);
  };

  return (
    <Styled.Container theme={selectedTheme} data-testid="FavoritesPage">
      <Styled.Title>Favorites</Styled.Title>
      <Styled.Row>
        {isVideoDetailVisible && (
          <VideoDetail
            handle={hideVideoDetail}
            isVideoDetailVisible={isVideoDetailVisible}
          />
        )}
        <VideoList
          items={items}
          handle={showVideoDetail}
          isVideoDetailVisible={isVideoDetailVisible}
        />
      </Styled.Row>
    </Styled.Container>
  );
}

export default FavoritesPage;
