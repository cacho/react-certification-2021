import { useEffect, useState } from 'react';

const useYoutubeAPI = (searchTerm) => {
  const [searchResult, setSearchResult] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchTerm}&key=${process.env.REACT_APP_YOUTUBE_API}`
        );
        const json = await response.json();
        setSearchResult(json);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    };
    fetchResults();
  }, [searchTerm]);

  return { searchResult, loading };
};

export default useYoutubeAPI;
