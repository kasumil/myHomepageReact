import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Nav from '../components/common/Nav';
import Carousel from '../components/Carousel';
import ImageBox from '../components/ImageBox';

const PhotoViewBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #bdbcbc;
`;

const SliderBlock = styled.div`
`;

const ImageBlock = styled.div``;

const PhotoView = () => {
  return (
    <PhotoViewBlock>
      <Nav />
      <SliderBlock>
        <Carousel />
      </SliderBlock>
      <ImageBlock>
        <ImageBox />
      </ImageBlock>
    </PhotoViewBlock>
  );
};

export default PhotoView;