import styled from 'styled-components';

const Container = styled.div.attrs(() => ({ className: `card-img-top` }))``;
const Image = styled.img.attrs(() => ({ className: `img-fluid` }))``;

const Styled = { Container, Image };
export default Styled;
