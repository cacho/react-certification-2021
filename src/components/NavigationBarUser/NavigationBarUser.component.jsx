import React from 'react';
import Styled from './NavigationBarUser.styled';
import { useTheme } from '../../providers/Theme.provider';
import useModal from '../../hooks/useModal';

function NavigationBarUser() {
  const { state } = useTheme();
  const { toggleModal, modal } = useModal();

  const showLoginForm = () => {
    toggleModal();
  };

  return (
    <>
      <Styled.Container data-testid="navigationBarUser" onClick={showLoginForm}>
        <Styled.UserImage
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          theme={state.selectedTheme}
        >
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </Styled.UserImage>
      </Styled.Container>
      {modal}
    </>
  );
}

export default NavigationBarUser;
