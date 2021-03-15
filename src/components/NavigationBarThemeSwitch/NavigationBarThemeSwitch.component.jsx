import React from 'react';
import Styled from './NavigationBarThemeSwitch.styled';
import { useTheme } from "../../providers/Theme.provider";

function NavigationBarThemeSwitch() {
  const {selectedTheme,toggleSelectedTheme} = useTheme()
  const handleSwitch = ()=>{
    toggleSelectedTheme()
  }
  return (
    <Styled.Container className="nav-item" data-testid="NavigationBarThemeSwitch">
      <Styled.Content className="form-check form-switch">
        <Styled.Label className="form-check-label" htmlFor="themeSwitchOptions">
          <Styled.Input
            className="form-check-input"
            type="checkbox"
            id="themeSwitchOptions"
            onChange={handleSwitch}
          />
          {selectedTheme} Theme
        </Styled.Label>
      </Styled.Content>
    </Styled.Container>
  );
}

export default NavigationBarThemeSwitch;
