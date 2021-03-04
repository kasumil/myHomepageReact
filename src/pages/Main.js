import React, { Fragment } from 'react';
import styled from 'styled-components';
import Nav from '../components/common/Nav';

const MainBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScriptTypo = styled.div`
  font-weight: 800;
  font-size: 40px;
  margin: 1rem 0;
`;

const ImgBlock = styled.img`
  margin-bottom: 2rem;
`;

const Main = () => {
  return (
    <Fragment>
      <Nav />
      <MainBlock>
        <ImgBlock src="/images/main.jpg" alt="펭수사진" />
        <ScriptTypo>환영합니다.</ScriptTypo>
        <ScriptTypo>송수호의 사이트입니다.</ScriptTypo>
      </MainBlock>
    </Fragment>
  );
};

export default Main;