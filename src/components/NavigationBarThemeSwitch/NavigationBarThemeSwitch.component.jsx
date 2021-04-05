import React from 'react';
import Styled from './NavigationBarThemeSwitch.styled';
import { useTheme } from '../../providers/Theme.provider';

function NavigationBarThemeSwitch() {
  const { state, dispatch } = useTheme();
  const handleSwitch = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  return (
    <Styled.Container data-testid="NavigationBarThemeSwitch">
      <Styled.Content>
        <Styled.Label theme={state.selectedTheme} htmlFor="themeSwitchOptions">
          <Styled.Input type="checkbox" id="themeSwitchOptions" onChange={handleSwitch} />
          {state.selectedTheme === 'dark' ? 'Light' : 'Dark'} Theme
        </Styled.Label>
      </Styled.Content>
    </Styled.Container>
  );
}

export default NavigationBarThemeSwitch;
