import styled from 'styled-components';

const Container = styled.section.attrs((props) => ({
  className: `container
   bg-${props.theme}
   text-${props.theme === 'light' ? 'dark' : 'light'}`,
}))`
  padding-top: 100px;
`;
const PageContent = styled.div``;
const WarningText = styled.p``;
const Title = styled.h1``;
const Row = styled.div.attrs(() => ({ className: `row` }))``;

const Styled = { Container, PageContent, WarningText, Title, Row };
export default Styled;
