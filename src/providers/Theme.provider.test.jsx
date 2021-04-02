import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';
import ThemeProvider, { useTheme } from './Theme.provider';
import { useAuth } from './Auth.provider';

describe('Theme Provider', () => {
  test('Selected Theme lighton start', () => {
    const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.state.selectedTheme).toBe('light');
  });
  test('Switch theme properly', () => {
    const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;
    const { result } = renderHook(() => useTheme(), { wrapper });
    expect(result.current.state.selectedTheme).toBe('light');
    act(() => {
      result.current.dispatch({ type: 'TOGGLE_THEME' });
    });

    expect(result.current.state.selectedTheme).toBe('dark');
  });
  test('Catch invalid type option on reducer', () => {
    const wrapper = ({ children }) => <ThemeProvider>{children}</ThemeProvider>;
    const { result } = renderHook(() => useTheme(), { wrapper });
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    try {
      act(() => {
        result.current.dispatch({ type: 'INVALID_TYPE' });
      });
    } catch (error) {
      expect(error.message).toBe('Invalid theme option');
    }
    consoleSpy.mockRestore();
  });
});
