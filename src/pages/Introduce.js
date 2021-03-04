import React from 'react';
import styled from 'styled-components';
import IntroContent from '../components/IntroContent';
import Nav from '../components/common/Nav';


const Introblock = styled.div``;

export default function Introduce() {
  return (
    <>
      <Nav />
      <Introblock>
        <IntroContent />
      </Introblock>
    </>
  );
}