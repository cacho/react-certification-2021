import React, { useRef } from 'react';
import { Modal } from 'bootstrap';
import Styled from './Login.styled';
import loginAPI from '../../utils/mocks/login.api';
import { useAuth } from '../../providers/Auth.provider';

function Login() {
  const { state, dispatch } = useAuth();
  const { authenticated } = state;
  const userNameField = useRef();
  const passwordField = useRef();

  const sendLogin = async (event) => {
    event.preventDefault();
    const userName = userNameField.current.value;
    const password = passwordField.current.value;
    await loginAPI(userName, password)
      .then(() => {
        dispatch({ type: 'AUTH_LOG_IN' });
        const myModalEl = document.getElementById('portalModalContainer');
        const modal = Modal.getInstance(myModalEl);
        if (modal) {
          modal.hide();
        }
      })
      .catch((error) => console.log(error));
  };

  const sendLogout = () => {
    dispatch({ type: 'AUTH_LOG_OUT' });
    const myModalEl = document.getElementById('portalModalContainer');
    const modal = Modal.getInstance(myModalEl);
    if (modal) {
      modal.hide();
    }
  };

  return (
    <>
      {!authenticated ? (
        <Styled.Container data-testid="LoginFormComponent">
          <Styled.FormContainer>
            <Styled.FormHeader>
              <Styled.FormHeaderTitle>Login</Styled.FormHeaderTitle>
              <Styled.CloseButton
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </Styled.FormHeader>
            <Styled.FormBody>
              <Styled.Form id="loginForm" onSubmit={sendLogin}>
                <Styled.RowContainer>
                  <Styled.Input
                    required
                    type="text"
                    placeholder="User Name"
                    id="username"
                    ref={userNameField}
                  />
                  <Styled.Label htmlFor="username">User Name</Styled.Label>
                </Styled.RowContainer>
                <Styled.RowContainer>
                  <Styled.Input
                    required
                    type="password"
                    placeholder="password"
                    id="password"
                    ref={passwordField}
                  />
                  <Styled.Label htmlFor="password">Password</Styled.Label>
                </Styled.RowContainer>
                <Styled.SendButton
                  data-testid="LogInFormButton"
                  aria-label="Login"
                  type="submit"
                >
                  Login
                </Styled.SendButton>
              </Styled.Form>
            </Styled.FormBody>
          </Styled.FormContainer>
        </Styled.Container>
      ) : (
        <Styled.Container data-testid="LogOutFormComponent">
          <Styled.FormContainer>
            <Styled.FormHeader>
              <Styled.FormHeaderTitle>Login</Styled.FormHeaderTitle>
              <Styled.CloseButton
                type="button"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </Styled.FormHeader>
            <Styled.FormBody>Already logged user</Styled.FormBody>
            <Styled.FormFooter>
              <Styled.SendButton data-testid="LogOutFormButton" onClick={sendLogout}>
                Logout
              </Styled.SendButton>
            </Styled.FormFooter>
          </Styled.FormContainer>
        </Styled.Container>
      )}
    </>
  );
}
export default Login;
