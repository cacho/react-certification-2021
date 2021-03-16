import styled from 'styled-components';

const Container = styled.section.attrs((props) => ({
  className: `container
   bg-${props.theme}
   text-${props.theme === 'light' ? 'dark' : 'light'}`,
}))`
  padding-top: 100px;
`;
const Row = styled.div.attrs(() => ({ className: `row` }))``;

const Styled = { Container, Row };
export default Styled;
