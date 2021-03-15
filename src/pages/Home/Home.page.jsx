import React, { useRef, useEffect, useState } from 'react';
import VideoList from '../../components/VideoList';
import useYoutubeAPI from '../../hooks/useYoutubeAPI';
import { useSearch } from '../../providers/Search.provider';
// import MockedYoutubeResponse from '../../utils/mocks/youTubeResponse.json';
import { filterItemsByKind } from '../../utils/contenFilter';
import Styled from './Home.page.styled';

import VideoDetail from '../../components/VideoDetail';

function HomePage() {
  const sectionRef = useRef(null);
  const { searchTerm } = useSearch();
  const { searchResult, loading } = useYoutubeAPI(searchTerm);
  // const searchResult = MockedYoutubeResponse;
  // const loading = false;
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
    <Styled.Container className="container" ref={sectionRef} data-testid="Home">
      <div className="row">
        <h1>Hello stranger!</h1>
      </div>
      <div className="row">
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
      </div>
    </Styled.Container>
  );
}

export default HomePage;
