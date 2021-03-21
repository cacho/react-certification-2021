import React, { useState, useEffect, useContext, useCallback } from 'react';

import { AUTH_STORAGE_KEY } from '../utils/constants';
import { storage } from '../utils/storage';

const AuthContext = React.createContext(null);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(`Can't use "useAuth" without an AuthProvider!`);
  }
  return context;
}

// const initialState = {
//   authenticated: false,
// };
// function reducer(state, action) {
//   switch (action.type) {
//     case 'AUTH_STATUS_CHANGE':
//       return { authenticated: state.authenticated };
//     default:
//       throw new Error();
//   }
// }

function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  // const [state, dispatch] = useReducer();
  useEffect(() => {
    const lastAuthState = storage.get(AUTH_STORAGE_KEY);
    const isAuthenticated = Boolean(lastAuthState);

    setAuthenticated(isAuthenticated);
  }, []);

  const login = useCallback(() => {
    setAuthenticated(true);
    storage.set(AUTH_STORAGE_KEY, true);
  }, []);

  const logout = useCallback(() => {
    setAuthenticated(false);
    storage.set(AUTH_STORAGE_KEY, false);
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, authenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export { useAuth };
export default AuthProvider;
