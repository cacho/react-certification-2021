import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import NavigationBar from '../components/NavigationBar';
import Login from '../components/Login';
import ThemeProvider from './Theme.provider';
import SearchProvider from './Search.provider';

describe('Providers required', () => {
  test('SearchProvider required error', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    expect(() =>
      render(
        <ThemeProvider>
          <BrowserRouter>
            <NavigationBar />
          </BrowserRouter>
        </ThemeProvider>
      )
    ).toThrowError(`Can't use "useSearch" without an SearchProvider!`);
    consoleSpy.mockRestore();
  });
  test('ThemeProvider required error', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});

    expect(() =>
      render(
        <SearchProvider>
          <BrowserRouter>
            <NavigationBar />
          </BrowserRouter>
        </SearchProvider>
      )
    ).toThrowError(`Can't use "useTheme" without an ThemeProvider!`);
    consoleSpy.mockRestore();
  });
  test('Auth provider required error', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});

    expect(() => render(<Login />)).toThrowError(
      `Can't use "useAuth" without an AuthProvider!`
    );
    consoleSpy.mockRestore();
  });
});
