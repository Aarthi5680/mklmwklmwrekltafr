import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import loimage from '../image/lo.png';

const MainSlider = styled(Slider)`
  width: 40%;
  margin: auto;
  margin-bottom: 20px;

  .slick-slide {
    position: relative;
    height: 400px; /* Adjust as needed */
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers the entire slide */
  }

  .slide-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    color: white;
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent background */
    width: 80%;
  }
`;

const Round = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000, // Animation speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: 3000, // Autoplay speed
    pauseOnHover: true, // Pause on hover
  };

  const slides = [
    {
      id: 1,
      image: loimage,
      altText: 'Slide 1',
      caption: 'Explore our personalized packages',
    },
    {
      id: 2,
      image: loimage,
      altText: 'Slide 2',
      caption: 'Discover the essence of precision',
    },
    {
      id: 3,
      image: loimage,
      altText: 'Slide 3',
      caption: 'Tailored solutions for your needs',
    },
    {
      id: 4,
      image: loimage,
      altText: 'Slide 4',
      caption: 'Unlock total value with us',
    },
    
  ];

  return (
    <MainSlider {...settings}>
      {slides.map((slide) => (
        <div key={slide.id} className="slick-slide">
          <img src={slide.image} alt={slide.altText} />
          <div className="slide-content">
            <h2>{slide.caption}</h2>
            <button>Learn More</button>
          </div>
        </div>
      ))}
    </MainSlider>
  );
};

export default Round;
