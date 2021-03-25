import React, { useEffect } from 'react';
import useModal from '../../hooks/useModal';

function LoginPage() {
  const { displayModal, modal } = useModal();
  // displayModal();
  useEffect(() => {
    displayModal();
  }, []);
  return <>{modal}</>;
}

export default LoginPage;
