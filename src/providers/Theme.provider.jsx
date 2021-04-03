import React, { useContext, useReducer } from 'react';

const ThemeContext = React.createContext(null);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without an ThemeProvider!`);
  }
  return context;
}

const initialState = { selectedTheme: 'light' };
function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return { selectedTheme: state.selectedTheme === 'light' ? 'dark' : 'light' };

    default:
      throw new Error('Invalid theme option');
  }
}

function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ThemeContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export { useTheme };
export default ThemeProvider;
