import React, { useState, useContext, useCallback } from 'react';

const ThemeContext = React.createContext(null);

function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error(`Can't use "useTheme" without an ThemeProvider!`);
  }
  return context;
}

function ThemeProvider({ children }) {
  const [selectedTheme, setSelectedTheme] = useState('light');

  const toggleSelectedTheme = useCallback(() =>{
      setSelectedTheme( selectedTheme === 'light' ? 'dark' : 'light')
  },[selectedTheme])

  return (
    <ThemeContext.Provider
      value={{
        toggleSelectedTheme,
        selectedTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
export { useTheme };
export default ThemeProvider;
