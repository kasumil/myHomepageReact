import React from 'react';
import styled from 'styled-components';

const IntroContentblock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ImgBlock = styled.img`
  margin-bottom: 2rem;
  width: 50%;
`;

const ScriptBlock = styled.div`
  font-weight: 500;
  font-size: 1.5em;
  line-height: 1.5em;
  margin-bottom: 2rem;
`;

const BoldFont = styled(ScriptBlock)`
  font-weight: bold;
  display: inline-block;
  :hover {
    color: blue;
    cursor: pointer;
  }
  margin-bottom: 0;
`;

export default function IntroContent() {
  return (
    <>
      <IntroContentblock>
        <ImgBlock src='/images/DSC02264.jpg' />
        <ScriptBlock>
          저의 이름은 <BoldFont>송수호</BoldFont>입니다.<br />
          저는 1992년 3월생입니다.<br />
          삼육대학교를 졸업하였습니다.<br />
          <BoldFont>React 프론트 엔드 개발자</BoldFont>이며,<br />
          wecode 부트캠프 학원을 수료하였습니다.<br />
          저의 기술스택은<br />
          Reac.js, TypeScript, Git, Github, Css in JS(styledComponent),<br />
          CSS, SCSS/SASS, ReactNative, Node.js입니다.
        </ScriptBlock>
      </IntroContentblock>
    </>
  );
}