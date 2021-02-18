import React from 'react';
import Styled from '../NavigationBar/NavigationBar.styled';

function NavigationBarToggler() {
  return (
    <Styled.TogglerButton
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
      aria-controls="navbarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </Styled.TogglerButton>
  );
}

export default NavigationBarToggler;