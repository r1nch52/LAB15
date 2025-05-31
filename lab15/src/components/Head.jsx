import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  gap: 2rem;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  &:hover {
    text-decoration: underline;
  }
`;

function Head() {
  return (
    <Header>
      <NavLink to="/news">Новости</NavLink>
      <NavLink to="/about">О проекте</NavLink>
      <NavLink to="/contacts">Контакты</NavLink>
    </Header>
  );
}

export default Head;