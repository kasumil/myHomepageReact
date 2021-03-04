import React, { useState } from 'react';
import styled from 'styled-components';

const ToggleMenuBlock = styled.div`
  width: 60px;
`;

const ToggleMove = styled.img`
`;

const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  height: 100vh;
  background-color: #acacac;
`;

const ModalList = styled.ul``;

const ModalContent = styled.li`
  margin: 1rem;
  :hover {
    text-decoration: underline;
    color: #fff;
  }
`;

const ModalState = styled.button`
  height: 2rem;
  margin-top: 0.7rem;
  margin-left: 1rem;
`;



const Menu = () => {
  const [toggle, setToggle] = useState(false);
  const [visible, setVisible] = useState(false);
  return (
    <ToggleMenuBlock>
      {visible
        ? null
        : <ModalState onClick={() => setVisible(true)}>메뉴</ModalState>
      }
      {visible &&
        <ModalWrap>
          <ModalList>
            <ModalContent>송수호</ModalContent>
            <ModalContent>소개</ModalContent>
            <ModalContent>사진</ModalContent>
            <ModalContent>기술블로그</ModalContent>
            <ModalContent>Youtube</ModalContent>
          </ModalList>
          {visible
            ? <ModalState onClick={() => setVisible(false)}>X</ModalState>
            : null
          }
        </ModalWrap>
      }
    </ToggleMenuBlock>
  )
};

export default Menu;