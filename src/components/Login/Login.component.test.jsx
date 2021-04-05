import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login.component';
import { useAuth } from '../../providers/Auth.provider';
import loginAPI from '../../utils/mocks/login.api';

jest.mock('../../providers/Auth.provider');
jest.mock('../../utils/mocks/login.api');

describe('<Login/>', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });
  test('Renders logout component to authenticated users', () => {
    useAuth.mockReturnValue({
      state: { authenticated: true },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<Login />);
    const logoutForm = getByTestId('LogOutFormComponent');
    expect(logoutForm).not.toBe(null);
  });
  test('Trigger logout Action', async () => {
    useAuth.mockReturnValue({
      state: { authenticated: true },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<Login />);
    const formButton = getByTestId('LogOutFormButton');
    userEvent.click(formButton);
  });
  test('Renders Login component to unauthenticated users', () => {
    useAuth.mockReturnValue({
      state: { authenticated: false },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<Login />);
    const loginForm = getByTestId('LoginFormComponent');
    expect(loginForm).not.toBe(null);
  });

  test('Trigger invalid login Action', () => {
    useAuth.mockReturnValue({
      state: { authenticated: false },
      dispatch: jest.fn(),
    });
    loginAPI.mockReturnValue(Promise.reject());
    const { getByTestId } = render(<Login />);
    const loginFormContainer = getByTestId('LoginFormComponent');
    expect(loginFormContainer).not.toBe(null);
    const loginForm = loginFormContainer.querySelector('#loginForm');
    const formButton = getByTestId('LogInFormButton');
    const loginNameField = loginForm.querySelector('#username');
    const loginPassField = loginForm.querySelector('#password');

    userEvent.type(loginNameField, 'testUser');
    userEvent.type(loginPassField, 'testPass');
    userEvent.click(formButton);
  });

  test('Trigger valid login Action', () => {
    useAuth.mockReturnValue({
      state: { authenticated: false },
      dispatch: jest.fn(),
    });
    loginAPI.mockReturnValue(Promise.resolve());
    const { getByTestId } = render(<Login />);
    const loginFormContainer = getByTestId('LoginFormComponent');
    expect(loginFormContainer).not.toBe(null);
    const loginForm = loginFormContainer.querySelector('#loginForm');
    const formButton = getByTestId('LogInFormButton');
    const loginNameField = loginForm.querySelector('#username');
    const loginPassField = loginForm.querySelector('#password');

    userEvent.type(loginNameField, 'testUser');
    userEvent.type(loginPassField, 'testPass');
    userEvent.click(formButton);
  });
});
