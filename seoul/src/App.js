import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className='App'>
      <Header />
      <section id='about'>축제소개</section>
      <section id='program'>프로그램</section>
      <section id='schedule'>축제일정</section>
      <section id='contact'>축제소오시는길</section>
    </div>
  );
}

export default App;
