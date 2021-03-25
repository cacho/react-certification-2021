import React, { useEffect, useState } from 'react';
import { Modal } from 'bootstrap';

import PortalModal from '../components/PortalModal/PortalModal.component';
import Login from '../components/Login/Login.component';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };
  useEffect(() => {
    if (showModal) {
      const modalElement = document.getElementById('portalModalContainer');
      const userNameField = document.getElementById('username');
      const portalModal = new Modal(modalElement, {
        keyboard: false,
        focus: true,
      });
      modalElement.addEventListener('shown.bs.modal', () => {
        if (userNameField) {
          userNameField.focus();
        }
      });
      modalElement.addEventListener('hidden.bs.modal', () => {
        setShowModal(false);
      });
      portalModal.show();
    }
  });

  const modal = showModal ? (
    <PortalModal>
      <Login />
    </PortalModal>
  ) : null;

  return { showModal, modal, toggleModal };
};

export default useModal;
