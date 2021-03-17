import styled from 'styled-components';

const Container = styled.div.attrs(() => ({ className: `nav-item` }))`
  width: 40px;
  height: 40px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-left: 0;
    margin-top: 10px;
  }
`;
const UserImage = styled.svg`
  background-color: ${(props) => (props.theme === 'light' ? `white` : `black`)};
  opacity: 0.75;
  border-radius: 50%;
  & > path {
    fill: ${(props) => (props.theme === 'light' ? 'black' : 'white')};
    opacity: 1;
  }
`;

const Styled = { Container, UserImage };
export default Styled;
