import styled from 'styled-components';
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import 'normalize.css/normalize.css';

const AppContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <Head />
      <Main />
      <Footer />
    </AppContainer>
  );
}

export default App;