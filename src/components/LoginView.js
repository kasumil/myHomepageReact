import React from 'react';
import styled from 'styled-components';

const Loginblock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e1e27e;
`;

const LoginBox = styled.div`
  border: 1px solid black;
  width: 20rem;
  height: 20rem;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin-bottom: 3rem;
  font-weight: bold;
  font-size: 3rem;
`;

const InputBox = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

const OnInput = styled.input`
  margin-top: 0.5rem;
  height: 2rem;
`;

const SubmitButton = styled.button`
  margin-top: 1rem;
  height: 3rem;
  border: 1px solid skyblue;
  color: #2f8bb6;
  font-size: 1rem;
  font-weight: bold;
  background-color: #fff;
  cursor: pointer;
  :hover {
    background-color: skyblue;
    color: white;
    font-size: 1rem;
  }
`;

function LoginView() {
  return (
    <>
      <Loginblock>
        <LoginBox>
          <Title>Login</Title>
          <InputBox>
            <OnInput
              name="username"
              placeholder='아이디를 입력해주세요.'
            />
            <OnInput
              type='password'
              name='password'
              placeholder="비밀번호를 입력해주세요."
            />
            <SubmitButton>버튼</SubmitButton>
          </InputBox>
        </LoginBox>
      </Loginblock>
    </>
  );
}

export default LoginView;