import styled from 'styled-components';

const Container = styled.section.attrs((props) => ({
  className: `
   bg-${props.theme}
   text-${props.theme === 'light' ? 'dark' : 'light'}`,
}))`
  padding-top: 100px;
`;
const PageContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const WarningText = styled.p``;

const Styled = { Container, PageContent, WarningText };
export default Styled;
