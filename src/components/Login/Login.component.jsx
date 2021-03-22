import React from 'react';
import Styled from './Login.styled';

function Login() {
  return (
    <Styled.Container>
      <Styled.Form>
        <Styled.Label htmlFor="username">
          UserName:
          <Styled.Input type="text" name="username" />
        </Styled.Label>
        <Styled.Label htmlFor="password">
          Password:
          <Styled.Input type="password" name="paswword" />
        </Styled.Label>
        <Styled.Button type="submit">Login</Styled.Button>
      </Styled.Form>
    </Styled.Container>
  );
}
export default Login;
