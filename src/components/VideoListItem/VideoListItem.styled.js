import styled from 'styled-components';

const Column = styled.div`
  margin-bottom: 20px;
`;
const Row = styled.div.attrs(() => ({ className: `card` }))`
  height: 100%;
  background-color: inherit;
`;

const Styled = { Column, Row };
export default Styled;
