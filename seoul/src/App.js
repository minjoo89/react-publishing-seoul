import styled from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        {/* <section id='about'>축제소개</section> */}
        <Main />
        <section id='program'>프로그램</section>
        <section id='schedule'>축제일정</section>
        <section id='contact'>축제소오시는길</section>
        <Footer />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  background-color: red;

  section {
    display: flex;
    align-items: center;
    height: 1000px;
  }
`;

export default App;
