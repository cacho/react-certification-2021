import React from 'react';
import NavigationBar from '../NavigationBar';
import Styled from './Layout.styled';
import { useTheme } from '../../providers/Theme.provider';

function Layout({ children }) {
  const { selectedTheme } = useTheme();
  return (
    <>
      <Styled.Header data-testid="Layout">
        <NavigationBar />
      </Styled.Header>
      <Styled.Container theme={selectedTheme}>
        <Styled.Main theme={selectedTheme}>{children}</Styled.Main>
      </Styled.Container>
    </>
  );
}

export default Layout;
