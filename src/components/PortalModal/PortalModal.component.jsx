import { createPortal } from 'react-dom';
import React from 'react';
import Styled from './PortalModal.styled';

function PortalModal({ children }) {
  const modalRoot = document.getElementById('root');
  const composed = (
    <Styled.Container id="portalModalContainer" data-testid="PortalModal">
      {children}
    </Styled.Container>
  );
  return createPortal(composed, modalRoot);
}
export default PortalModal;
