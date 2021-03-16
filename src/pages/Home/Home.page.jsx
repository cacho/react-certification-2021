import React, { useRef, useEffect, useState } from 'react';
import VideoList from '../../components/VideoList';
// import useYoutubeAPI from '../../hooks/useYoutubeAPI';
// import { useSearch } from '../../providers/Search.provider';
import MockedYoutubeResponse from '../../utils/mocks/youTubeResponse.json';
import { filterItemsByKind } from '../../utils/contenFilter';
import Styled from './Home.page.styled';

import VideoDetail from '../../components/VideoDetail';
import { useTheme } from '../../providers/Theme.provider';

function HomePage() {
  const sectionRef = useRef(null);
  const { selectedTheme } = useTheme();
  // const { searchTerm } = useSearch();
  // const { searchResult, loading } = useYoutubeAPI(searchTerm);
  const searchResult = MockedYoutubeResponse;
  const loading = false;
  const [items, setItems] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [isVideoDetailVisible, setIsVideoDetailVisible] = useState(false);

  const hideVideoDetail = () => {
    if (isVideoDetailVisible) setIsVideoDetailVisible(!isVideoDetailVisible);
  };
  const showVideoDetail = () => {
    if (!isVideoDetailVisible) setIsVideoDetailVisible(!isVideoDetailVisible);
  };
  useEffect(() => {
    setItems(searchResult?.items);
    if (items) {
      setFilteredList(filterItemsByKind(items, 'video'));
    }
  }, [searchResult, items]);

  if (loading) return <p>Loading ....</p>;
  return (
    <Styled.Container theme={selectedTheme} ref={sectionRef} data-testid="Home">
      <Styled.Row>
        <h1>Hello stranger!</h1>
      </Styled.Row>
      <Styled.Row>
        {isVideoDetailVisible && (
          <VideoDetail
            handle={hideVideoDetail}
            isVideoDetailVisible={isVideoDetailVisible}
          />
        )}
        <VideoList
          items={filteredList}
          handle={showVideoDetail}
          isVideoDetailVisible={isVideoDetailVisible}
        />
      </Styled.Row>
    </Styled.Container>
  );
}

export default HomePage;
