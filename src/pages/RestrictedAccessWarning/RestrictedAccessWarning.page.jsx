import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../providers/Theme.provider';
import Styled from './RestrictedAccessWarning.page.styled';

function RestrictedAccessWarning() {
  const { state } = useTheme();
  const { selectedTheme } = state;
  return (
    <Styled.Container theme={selectedTheme} data-testid="ResrictedAccessPage">
      <Styled.PageContent>
        <Styled.WarningText>Acceso Restringido</Styled.WarningText>
        <Link to="/"> ← go back</Link>
      </Styled.PageContent>
    </Styled.Container>
  );
}
export default RestrictedAccessWarning;
