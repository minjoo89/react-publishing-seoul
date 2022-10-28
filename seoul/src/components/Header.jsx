import React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';

const Header = () => {
  return (
    <StickyHeader>
      <nav className='nav__container__actions'>
        <ul>
          <ScrollLink activeClass='active' smooth spy to='about'>
            축제소개
          </ScrollLink>
          <ScrollLink activeClass='active' smooth spy to='program'>
            프로그램
          </ScrollLink>
          <ScrollLink activeClass='active' smooth spy to='schedule'>
            축제일정
          </ScrollLink>
          <ScrollLink activeClass='active' smooth spy to='contact'>
            축제소오시는길
          </ScrollLink>
        </ul>
      </nav>
    </StickyHeader>
  );
};

const StickyHeader = styled.header`
  position: sticky;
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: flex-end;
  top: 0;
  left: 0;
  padding: 0 36px;
  background-color: white;
`;

const ScrollLink = styled(Link)`
  & + & {
    margin-left: 20px;
  }
`;

export default Header;
