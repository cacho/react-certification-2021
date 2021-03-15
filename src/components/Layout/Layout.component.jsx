import React from 'react';
import NavigationBar from '../NavigationBar';
import Styled from './Layout.styled';
import ThemeProvider from "../../providers/Theme.provider";


function Layout({ children }) {
  return (
    <>
      <Styled.Header data-testid="Layout">
        <ThemeProvider  >
          <NavigationBar />
        </ThemeProvider>
      </Styled.Header>
      <Styled.Container>
        <Styled.Main>{children}</Styled.Main>
      </Styled.Container>
    </>
  );
}

export default Layout;
