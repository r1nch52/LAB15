import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Section from './Section';
import Article from './Article';
import Aside from './Aside';

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
`;

function Main() {
  return (
    <MainContainer>
      <Section />
      <Article />
      <Aside />
    </MainContainer>
  );
}

export default Main;