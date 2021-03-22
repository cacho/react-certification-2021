import { createPortal } from 'react-dom';
import React from 'react';
import Styled from './Modal.styled';

function Modal({ children }) {
  const modalRoot = document.getElementById('modal-root');
  const composed = <Styled.Overlay>{children}</Styled.Overlay>;
  return createPortal(composed, modalRoot);
}
export default Modal;
