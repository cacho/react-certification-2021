import styled from 'styled-components';

const Container = styled.nav.attrs((props) => ({
  className: `navbar navbar-${props.theme} bg-${props.theme} fixed-top navbar-expand-md`,
}))`
  padding: 15px;
`;
const Content = styled.div.attrs(() => ({ className: 'container-fluid' }))`
  padding: 0;
`;

const Styled = { Container, Content };
export default Styled;
