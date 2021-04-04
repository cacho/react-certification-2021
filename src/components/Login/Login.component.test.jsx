import React from 'react';
import { render, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login.component';
import { useAuth } from '../../providers/Auth.provider';

// import { HashRouter } from 'react-router-dom';
// import ThemeProvider from '../../providers/Theme.provider';
// import PortalModal from '../../components/PortalModal';
// import SearchProvider from '../../providers/Search.provider';
// import NavigationBar from '../../components/NavigationBar';
// import PortalModal from '../../components/PortalModal/PortalModal.component';
// jest.mock('../../providers/Auth.provider');

jest.mock('../../providers/Auth.provider');

describe('<Login/>', () => {
  test('Renders Login component to authenticated users', () => {
    useAuth.mockReturnValue({
      state: { authenticated: true },
      dispatch: jest.fn(),
    });
    const { getByTestId } = render(<Login />);
    const logoutForm = getByTestId('LogOutFormComponent');
    expect(logoutForm).not.toBe(null);
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

  // test('Trigger login Action', async () => {
  //   useAuth.mockReturnValue({
  //     state: { authenticated: false },
  //     dispatch: jest.fn(),
  //   });
  //   const { getByTestId } = render(<Login />);
  //   const loginFormContainer = getByTestId('LoginFormComponent');
  //   expect(loginFormContainer).not.toBe(null);
  //   const loginForm = loginFormContainer.querySelector('#loginForm');
  //   const formButton = getByTestId('LogInFormButton');
  //   const loginNameField = loginForm.querySelector('#username');
  //   const loginPassField = loginForm.querySelector('#password');

  //   userEvent.type(loginNameField, 'jhon');
  //   userEvent.type(loginPassField, 'pass');

  //   act(() => {
  //     userEvent.click(formButton);
  //   });
  // });
});
