import styled from 'styled-components';

const Container = styled.div.attrs((props) => ({ className: `bg-${props.theme}` }))``;
const Main = styled.main.attrs((props) => ({ className: `bg-${props.theme}` }))``;
const Header = styled.header``;

const Styled = { Container, Main, Header };
export default Styled;
