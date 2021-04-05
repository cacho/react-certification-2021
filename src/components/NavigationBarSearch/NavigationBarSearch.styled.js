import styled from 'styled-components';

const Form = styled.form.attrs(() => ({ className: `d-flex` }))`
  @media (max-width: 375px) {
    flex: 0 1 180px;
  }
`;
const Field = styled.input.attrs(() => ({ className: `form-control me-2` }))``;
const Button = styled.button.attrs((props) => ({
  className: `btn btn-outline-${props.theme === 'light' ? 'dark' : 'light'}`,
}))``;

const Styled = { Form, Field, Button };
export default Styled;
