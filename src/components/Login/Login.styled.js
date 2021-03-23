import styled from 'styled-components';

const Container = styled.div.attrs(() => ({
  className: `modal-dialog modal-dialog-centered`,
}))``;

const FormContainer = styled.div.attrs(() => ({
  className: `modal-content`,
}))`
  background-color: white;
  pointer-events: auto;
`;

const FormBody = styled.div.attrs(() => ({
  className: `modal-body`,
}))``;
const FormHeader = styled.div.attrs(() => ({
  className: `modal-header`,
}))``;
const FormHeaderTitle = styled.h5.attrs(() => ({
  className: `modal-title`,
}))``;
const RowContainer = styled.div.attrs(() => ({
  className: `form-floating`,
}))``;
const Form = styled.form``;
const Label = styled.label``;
const Input = styled.input.attrs(() => ({
  className: `form-control mb-3`,
}))``;
const CloseButton = styled.button.attrs(() => ({
  className: `btn-close`,
}))``;
const SendButton = styled.button.attrs(() => ({
  className: `btn btn-primary float-end`,
}))``;

const Styled = {
  Container,
  FormContainer,
  FormHeaderTitle,
  FormBody,
  FormHeader,
  RowContainer,
  Form,
  Label,
  Input,
  SendButton,
  CloseButton,
};
export default Styled;
