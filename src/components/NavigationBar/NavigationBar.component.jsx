import React from 'react';
import Styled from './NavigationBar.styled';
import NavigationBarBrand from '../NavigationBarBrand';
import NavigationBarToggler from '../NavigatioBarToggler';
import NavigationBarSearch from '../NavigationBarSearch';
import NavigationBarMenu from '../NavigationBarMenu';
import { useTheme } from '../../providers/Theme.provider';

function NavigationBar() {
  const { state } = useTheme();
  return (
    <Styled.Container theme={state.selectedTheme} data-testid="navigationBar">
      <Styled.Content>
        <NavigationBarBrand />
        <NavigationBarSearch />
        <NavigationBarToggler />
        <NavigationBarMenu />
      </Styled.Content>
    </Styled.Container>
  );
}

export default NavigationBar;
