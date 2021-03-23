import React from 'react';
import { Modal } from 'bootstrap';
import Styled from './Login.styled';
import loginAPI from '../../utils/mocks/login.api';
import { useAuth } from '../../providers/Auth.provider';

function Login() {
  const { login, logout, authenticated } = useAuth();
  console.log(authenticated);
  const sendLogin = async (event) => {
    event.preventDefault();
    const userName = event.target.username.value;
    const password = event.target.password.value;
    await loginAPI(userName, password)
      .then(() => {
        login();
        const myModalEl = document.getElementById('portalModalContainer');
        const modal = Modal.getInstance(myModalEl);
        modal.hide();
      })
      .catch((error) => console.log(error));
  };
  const sendLogout = () => {
    logout();
    const myModalEl = document.getElementById('portalModalContainer');
    const modal = Modal.getInstance(myModalEl);
    modal.hide();
  };
  return (
    <>
      {!authenticated ? (
        <Styled.Container>
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
                  />
                  <Styled.Label htmlFor="username">User Name</Styled.Label>
                </Styled.RowContainer>
                <Styled.RowContainer>
                  <Styled.Input
                    required
                    type="password"
                    placeholder="password"
                    id="password"
                  />
                  <Styled.Label htmlFor="password">Password</Styled.Label>
                </Styled.RowContainer>
                <Styled.SendButton type="submit">Login</Styled.SendButton>
              </Styled.Form>
            </Styled.FormBody>
          </Styled.FormContainer>
        </Styled.Container>
      ) : (
        <Styled.Container>
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
              <Styled.SendButton onClick={sendLogout}>Logout</Styled.SendButton>
            </Styled.FormFooter>
          </Styled.FormContainer>
        </Styled.Container>
      )}
    </>
  );
}
export default Login;
