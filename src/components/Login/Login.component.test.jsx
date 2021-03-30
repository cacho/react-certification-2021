import React from 'react';
import { fireEvent, render, findByText, screen } from '@testing-library/react';
import Login from './Login.component';
import AuthProvider, { useAuth } from '../../providers/Auth.provider';
// import { HashRouter } from 'react-router-dom';
// import ThemeProvider from '../../providers/Theme.provider';
// // import PortalModal from '../../components/PortalModal';
// import SearchProvider from '../../providers/Search.provider';
// import NavigationBar from '../../components/NavigationBar';
// import PortalModal from '../../components/PortalModal/PortalModal.component';
// jest.mock('../../providers/Auth.provider');

describe('<Login/>', () => {
  test('Renders Login component', () => {
    const { getByTestId } = render(
      <AuthProvider>
        <Login />
      </AuthProvider>
    );
    const loginForm = getByTestId('LoginFormComponent');
    expect(loginForm).not.toBe(null);
  });
  test('Fails without provider', () => {
    const consoleSpy = jest.spyOn(console, 'error');
    consoleSpy.mockImplementation(() => {});

    expect(() => render(<Login />)).toThrowError(
      `Can't use "useAuth" without an AuthProvider!`
    );
    consoleSpy.mockRestore();
  });
  test('Trigger login Action', async () => {
    // const { getByTestId } = render(
    //   <AuthProvider authenticated>
    //     <Login />
    //   </AuthProvider>
    // );
    // const loginFormContainer = getByTestId('LoginFormComponent');
    // expect(loginFormContainer).not.toBe(null);
    // const loginForm = loginFormContainer.querySelector('#loginForm');
    // const formButton = loginForm.querySelector('#loginForm button[type=submit]');
    // const loginNameField = loginForm.querySelector('#username');
    // fireEvent.change(loginNameField, { target: { value: 'jhon' } });
    // fireEvent.change(loginForm.querySelector('#password'), { target: { value: 'pass' } });
    // loginForm.querySelector('#username').value = 'sasd';
    // fireEvent(
    //   formButton,
    //   new MouseEvent('click', {
    //     bubbles: true,
    //     cancelable: true,
    //   })
    // );
    // loginForm.addEventListener('submit', (e) => {
    //   console.log(e);
    //   expect(e).toThrowError('Username or password invalid');
    // });
  });
});
