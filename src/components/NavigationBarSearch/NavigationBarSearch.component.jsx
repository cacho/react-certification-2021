import React from 'react';
import { debounce } from 'debounce';
import { useSearch } from '../../providers/Search.provider';
import Styled from './NavigationBarSearch.styled';
import { useTheme } from '../../providers/Theme.provider';

function NavigationBarSearch() {
  const { state } = useTheme();
  const { dispatch } = useSearch();

  const debouncedSearch = debounce((v) => {
    const searchFor = v === '' ? 'wizeline' : v;
    dispatch({ type: 'SEARCH_TERM_CHANGE', payload: searchFor });
  }, 1000);

  const handleChange = (e) => {
    const { value } = e.target;
    debouncedSearch(value);
  };
  return (
    <Styled.Form
      data-testid="NavigationBarSearch"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Styled.Field
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={handleChange}
      />
      <Styled.Button type="submit" theme={state.selectedTheme}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </Styled.Button>
    </Styled.Form>
  );
}

export default NavigationBarSearch;
