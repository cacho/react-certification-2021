import React from 'react';
import Styled from './NavigationBarThemeSwitch.styled';
import { useTheme } from '../../providers/Theme.provider';

function NavigationBarThemeSwitch() {
  const { selectedTheme, toggleSelectedTheme } = useTheme();
  const handleSwitch = () => {
    toggleSelectedTheme();
  };
  return (
    <Styled.Container data-testid="NavigationBarThemeSwitch">
      <Styled.Content>
        <Styled.Label theme={selectedTheme} htmlFor="themeSwitchOptions">
          <Styled.Input type="checkbox" id="themeSwitchOptions" onChange={handleSwitch} />
          {selectedTheme === 'dark' ? 'Light' : 'Dark'} Theme
        </Styled.Label>
      </Styled.Content>
    </Styled.Container>
  );
}

export default NavigationBarThemeSwitch;
