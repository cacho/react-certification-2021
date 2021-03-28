import React, { useReducer, useContext } from 'react';

const SearchContext = React.createContext(null);

function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error(`Can't use "useSearch" without an SearchProvider!`);
  }
  return context;
}

const initialState = {
  searchTerm: 'wizeline',
  selectedVideo: {
    id: { videoID: 'testingVid' },
    snippet: { thumbnails: { high: { url: '' } }, title: '', description: '' },
  },
};

function reducer(state, action) {
  switch (action.type) {
    case 'SEARCH_TERM_CHANGE':
      return { ...state, searchTerm: action.payload };
    case 'UPDATE_SELECTED_VIDEO':
      return { ...state, selectedVideo: action.payload };
    default:
      throw new Error();
  }
}

function SearchProvider({ children }) {
  const [searchState, dispatch] = useReducer(reducer, initialState);
  return (
    <SearchContext.Provider
      value={{
        searchState,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}
export { useSearch };
export default SearchProvider;
