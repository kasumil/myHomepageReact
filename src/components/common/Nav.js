import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from './Menu';

const NavBlock = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  position: relative;
`;

const NavListBundle = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavListItem = styled.li`
  margin: 1rem;
`;

const Nav = () => {
  return (
    <NavBlock >
      <Menu />
      <NavListBundle>
        <NavListItem>
          <Link to="/">송수호의 사이트입니다</Link>
        </NavListItem>
        <NavListItem>
          <Link to="/Intro">소개</Link>
        </NavListItem>
        <NavListItem>
          사진
        </NavListItem>
        <NavListItem>
          GIT
        </NavListItem>
        <NavListItem>
          기술블로그
        </NavListItem>
        <NavListItem>
          Youtube
        </NavListItem>
      </NavListBundle>
    </NavBlock>
  );
};

export default Nav;