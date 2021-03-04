import React, { useRef, useEffect, useState } from 'react';
import VideoList from '../../components/VideoList';
// import useYoutubeAPI from '../../hooks/useYoutubeAPI';
// import { useSearch } from '../../providers/Search.provider';
import MockedYoutubeResponse from '../../utils/mocks/youTubeResponse.json';
import { filterItemsByKind } from '../../utils/contenFilter';

import VideoDetail from '../../components/VideoDetail';

function HomePage() {
  const sectionRef = useRef(null);
  // const { searchTerm } = useSearch();
  // const { searchResult, loading } = useYoutubeAPI(searchTerm);
  const searchResult = MockedYoutubeResponse;
  const loading = false;
  const [items, setItems] = useState([]);
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    console.log('---- HOMEPAGE ----');
    console.log(searchResult);
    setItems(searchResult?.items);
    if (items) {
      setFilteredList(filterItemsByKind(items, 'video'));
    }
  }, [searchResult, items]);

  if (loading) return <p>Loading ....</p>;
  return (
    <section className="container" ref={sectionRef} data-testid="Home">
      <h1>Hello stranger!</h1>
      <VideoDetail />
      <VideoList items={filteredList} />
    </section>
  );
}

export default HomePage;
