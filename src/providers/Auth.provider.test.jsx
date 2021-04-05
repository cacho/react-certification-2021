import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { act } from '@testing-library/react';
import AuthProvider, { useAuth } from './Auth.provider';

describe('Auth Provider', () => {
  test('Authenticated false on start', () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });
    expect(result.current.state.authenticated).toBeFalsy();
  });
  test('Authenticated true after login', () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.dispatch({ type: 'AUTH_LOG_IN' });
    });

    expect(result.current.state.authenticated).toBeTruthy();
  });
  test('Authenticated false after logout', () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });

    act(() => {
      result.current.dispatch({ type: 'AUTH_LOG_IN' });
    });

    expect(result.current.state.authenticated).toBeTruthy();

    act(() => {
      result.current.dispatch({ type: 'AUTH_LOG_OUT' });
    });

    expect(result.current.state.authenticated).toBeFalsy();
  });

  test('Catch invalid type option on reducer', () => {
    const wrapper = ({ children }) => <AuthProvider>{children}</AuthProvider>;
    const { result } = renderHook(() => useAuth(), { wrapper });
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});
    try {
      act(() => {
        result.current.dispatch({ type: 'AUTH_LOG' });
      });
    } catch (error) {
      expect(error.message).toBe('Invalid auth method');
    }
    consoleSpy.mockRestore();
  });
});
