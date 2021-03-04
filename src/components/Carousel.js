import React, { useState, useEffect, useRef }from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 2rem;
`;

const CustomSlider = styled(Slider)`
  width: 50%;

  .slick-disabled {
    display: none !important;
  }

  .slick-prev {
    position: absolute;
    color: white;
    background-color: rgba(74, 74, 74, 0.6);
    width: 80px;
    height: 100px;
    left: 0;
    border-radius: 5px;
    z-index: 1;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .slick-prev:before {
    width: 30px !important;
    height: 30px !important;
    font-size: 30px !important;
  }

  .slick-next {
    position: absolute;
    color: white;
    background-color: rgba(74, 74, 74, 0.6);
    width: 80px;
    height: 100px;
    right: 0;
    border-radius: 5px;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  .slick-next:before {
    width: 30px !important;
    height: 30px !important;
    font-size: 30px !important;
  }
`;

const settings = {
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
}

const settings2 = {
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  centerMode: true,
  focusOnSelect: true
}

const PhotoOne = styled.img`
  width: 100%;
`;

const Carousel = () => {
  const [photos, setPhotos] = useState();

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/images')
  //   .then((res) =>{
  //     setPhotos(res.data);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   })
  // }, []);

  return (
    <CarouselBlock>
      <CustomSlider {...settings} asNavFor={nav2} ref={slider1}>
        {/* {photos && photos.map((photo, i) => { */}
          {/* return( */}
            {/* <div>
              <PhotoOne key={i} alt={photo} src={photo} loading='lazy'  />
            </div> */}
            <div>
              <PhotoOne alt='' src={'/images/DSC05941.jpg'} loading='lazy'  />
            </div>
            <div>
              <PhotoOne alt='' src={'/images/DSC05947.jpg'} loading='lazy'  />
            </div>
            <div>
              <PhotoOne alt='' src={'/images/DSC05974.jpg'} loading='lazy'  />
            </div>
            <div>
              <PhotoOne alt='' src={'/images/DSC06001.jpg'} loading='lazy'  />
            </div>
          {/* ) */}
        {/* })} */}
      </CustomSlider>
      <CustomSlider
          {...settings2}
          asNavFor={nav1}
          ref={slider2}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}>
            <div>
              <PhotoOne alt='' src={'/images/DSC05941.jpg'} loading='lazy'  />
            </div>
            <div>
              <PhotoOne alt='' src={'/images/DSC05947.jpg'} loading='lazy'  />
            </div>
            <div>
              <PhotoOne alt='' src={'/images/DSC05974.jpg'} loading='lazy'  />
            </div>
            <div>
              <PhotoOne alt='' src={'/images/DSC06001.jpg'} loading='lazy'  />
            </div>
      </CustomSlider>
    </CarouselBlock>
  );
};

export default Carousel;