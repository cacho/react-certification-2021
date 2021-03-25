import React from 'react';
import { useTheme } from '../../providers/Theme.provider';
import Styled from './Favorites.page.styled';

function FavoritesPage() {
  const { state } = useTheme();
  const { selectedTheme } = state;
  return (
    <Styled.Container theme={selectedTheme}>
      <Styled.Title>Favorites</Styled.Title>
    </Styled.Container>
  );
}

export default FavoritesPage;
