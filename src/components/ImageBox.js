import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const ImageBoxBlock = styled.div`
  margin: 0 10rem;
  border: 2px solid black;
`;

const ImageTitle = styled.div``;

const Image = styled.image`
  width: 614px;
`;

const ImageBox = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/images')
      .then((res) => {
        setData(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
  }, []);

  return (
    <ImageBoxBlock>
      {data && data.map((one, i) => {
        return(
        <>
          <ImageTitle>{one}</ImageTitle>
          <Image key={i} src={one} alt={one} />
        </>
        )
      })}
    </ImageBoxBlock>
  );
};

export default ImageBox;