import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { useAuth } from '../../providers/Auth.provider';

function Private({ children, ...rest }) {
  const { state } = useAuth();
  const { authenticated } = state;

  return (
    <Route {...rest}>
      {authenticated ? children : <Redirect to="/restricted-access" />}
    </Route>
  );
}

export default Private;
