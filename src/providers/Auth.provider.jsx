import React, { useContext, useReducer } from 'react';

import { AUTH_STORAGE_KEY, AUTH_USER_FAVORITES } from '../utils/constants';
import { storage } from '../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

const initialState = {
  authenticated: Boolean(storage.get(AUTH_STORAGE_KEY)),
};

function reducer(state, action) {
  switch (action.type) {
    case 'AUTH_LOG_IN':
      storage.set(AUTH_STORAGE_KEY, true);
      storage.set(AUTH_USER_FAVORITES, []);
      return { ...state, authenticated: true };
    case 'AUTH_LOG_OUT':
      storage.set(AUTH_STORAGE_KEY, false);
      storage.set(AUTH_USER_FAVORITES, []);
      return { ...state, authenticated: false };
    default:
      throw new Error('Invalid auth method');
  }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>{children}</AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
