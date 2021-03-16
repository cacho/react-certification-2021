import styled from 'styled-components';

const Body = styled.div.attrs(() => ({ className: `card-body` }))``;
const Title = styled.h5.attrs(() => ({ className: `card-title` }))``;
const Text = styled.p.attrs(() => ({ className: `card-text` }))``;

const Styled = { Body, Title, Text };
export default Styled;
