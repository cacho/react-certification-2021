import React from 'react';
import Styled from './Login.styled';

function Login() {
  return (
    <Styled.Container>
      <Styled.FormContainer>
        <Styled.FormHeader>
          <Styled.FormHeaderTitle>Login</Styled.FormHeaderTitle>
          <Styled.CloseButton type="button" data-bs-dismiss="modal" aria-label="Close" />
        </Styled.FormHeader>
        <Styled.FormBody>
          <Styled.Form onSubmit={(e) => e.preventDefault()}>
            <Styled.RowContainer>
              <Styled.Input type="text" placeholder="User Name" id="username" />
              <Styled.Label htmlFor="username">User Name</Styled.Label>
            </Styled.RowContainer>
            <Styled.RowContainer>
              <Styled.Input type="password" placeholder="password" id="paswword" />
              <Styled.Label htmlFor="password">Password</Styled.Label>
            </Styled.RowContainer>
            <Styled.SendButton type="submit">Login</Styled.SendButton>
          </Styled.Form>
        </Styled.FormBody>
      </Styled.FormContainer>
    </Styled.Container>
  );
}
export default Login;
