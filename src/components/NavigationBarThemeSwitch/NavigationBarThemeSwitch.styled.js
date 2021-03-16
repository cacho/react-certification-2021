import styled from 'styled-components';

const Container = styled.div.attrs(() => ({ className: `nav-item` }))`
  margin-right: 20px;
  margin-left: 20px;
  margin-top: 8px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    margin-top: 10px;
  }
`;
const Content = styled.div.attrs(() => ({ className: `form-check form-switch` }))``;
const Label = styled.label.attrs((props) => ({
  className: `form-check-label text-${props.theme === 'light' ? 'dark' : 'light'}`,
}))`
  text-transform: Capitalize;
`;
const Input = styled.input.attrs(() => ({ className: `form-check-input` }))``;

const Styled = { Container, Content, Label, Input };
export default Styled;
