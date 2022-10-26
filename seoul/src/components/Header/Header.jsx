import React from 'react';
import './Header.css';
import { Link } from 'react-scroll';

const Header = () => {
  return (
    <header className='nav'>
      <nav className='nav__container__actions'>
        <ul>
          <Link activeClass='active' smooth spy to='about'>
            축제소개
          </Link>
          <Link activeClass='active' smooth spy to='program'>
            프로그램
          </Link>
          <Link activeClass='active' smooth spy to='schedule'>
            축제일정
          </Link>
          <Link activeClass='active' smooth spy to='contact'>
            축제소오시는길
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
