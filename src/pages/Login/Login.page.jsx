import React, { useEffect, useState } from 'react';
import { Modal } from 'bootstrap';
import { useHistory } from 'react-router-dom';

import PortalModal from '../../components/PortalModal/PortalModal.component';
import Login from '../../components/Login/Login.component';

function LoginPage() {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };
  const [showModal, setShowModal] = useState(true);

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
        goBack();
      });
      portalModal.show();
    }
  });

  const modal = (
    <PortalModal>
      <Login />
    </PortalModal>
  );

  return <>{modal}</>;
}

export default LoginPage;
