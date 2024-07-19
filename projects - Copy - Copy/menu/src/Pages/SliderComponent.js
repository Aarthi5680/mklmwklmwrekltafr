import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
import bioimage from '../image/bio.png';

import '../App.css'; // Assuming this is for global styles

// Next arrow component
const NextArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'block',
      background: 'purple',
      borderRadius: '50%',
      right: '10px',
      width: '40px',
      height: '40px',
      zIndex: 1,
    }}
    onClick={onClick}
  />
);

// Previous arrow component
const PrevArrow = ({ className, style, onClick }) => (
  <div
    className={className}
    style={{
      ...style,
      display: 'block',
      background: 'purple',
      borderRadius: '50%',
      left: '10px',
      width: '40px',
      height: '40px',
      zIndex: 1,
    }}
    onClick={onClick}
  />
);

// Styled SlideItem component
const SlideItem = styled.div`
  background-color: ${(props) => props.bgColor};
  color: ${(props) => (props.textColor ? props.textColor : 'white')};
  height: 400px; /* Default height for larger screens */
  border-radius: 10px;
  padding: 20px;
  margin: 0 10px;

  img {
    width: 100%;
    height: 150px; /* Adjust height as needed */
    object-fit: cover;
    border-radius: 10px;
  }

  button {
    background-color: #FFA500;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }

  /* Media queries for responsive design */
  @media (max-width: 1024px) {
    height: 350px;
    padding: 15px;
    img {
      height: 120px;
    }
    button {
      padding: 8px 16px;
    }
  }

  @media (max-width: 768px) {
    height: 300px;
    padding: 10px;
    img {
      height: 100px;
    }
    button {
      padding: 6px 12px;
    }
  }

  @media (max-width: 480px) {
    height: 250px;
    padding: 8px;
    img {
      height: 80px;
    }
    button {
      padding: 4px 8px;
    }
  }

  @media (max-width: 360px) {
    height: 200px;
    padding: 6px;
    img {
      height: 60px;
    }
    button {
      padding: 3px 6px;
    }
  }
`;

// SlideContent component for slide text
const SlideContent = styled.div`
  padding-top: 10px;
`;

// Main SliderComponent function
const SliderComponent = () => {
  // Settings object for react-slick slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides shown at a time
    slidesToScroll: 1, // Number of slides scrolled per click
    nextArrow: <NextArrow />, // Custom next arrow component
    prevArrow: <PrevArrow />, // Custom previous arrow component
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%', margin: '0', padding: '0' }}>
      <Slider {...settings}>
        <div>
          <SlideItem bgColor="#4E2A84" textColor="white">
            <img src={bioimage} alt="Slide 1" style={{width:'400px'}} />
            <SlideContent>
              <h2>EXPLORE OUR PERSONALIZED PACKAGES</h2>
              <p>Total Precision. Total Value. Tailor-made for you!</p>
              <button>LEARN MORE</button>
            </SlideContent>
          </SlideItem>
        </div>
        <div>
          <SlideItem bgColor="#FFD700" textColor="black">
            <img src={bioimage} alt="Slide 2" />
            <SlideContent>
              <h2>EXPLORE OUR PERSONALIZED PACKAGES</h2>
              <p>Total Precision. Total Value. Tailor-made for you!</p>
              <button>LEARN MORE</button>
            </SlideContent>
          </SlideItem>
        </div>
        <div>
          <SlideItem bgColor="#1E90FF" textColor="white">
            <img src={bioimage} alt="Slide 3" />
            <SlideContent>
              <h2>EXPLORE OUR PERSONALIZED PACKAGES</h2>
              <p>Total Precision. Total Value. Tailor-made for you!</p>
              <button>LEARN MORE</button>
            </SlideContent>
          </SlideItem>
        </div>
        <div>
          <SlideItem bgColor="#32CD32" textColor="white">
            <img src={bioimage} alt="Slide 4" />
            <SlideContent>
              <h2>EXPLORE OUR PERSONALIZED PACKAGES</h2>
              <p>Total Precision. Total Value. Tailor-made for you!</p>
              <button>FIND OUT MORE</button>
            </SlideContent>
          </SlideItem>
        </div>
        <div>
          <SlideItem bgColor="#FF6347" textColor="white">
            <img src={bioimage} alt="Slide 5" />
            <SlideContent>
              <h2>EXPLORE OUR PERSONALIZED PACKAGES</h2>
              <p>Total Precision. Total Value. Tailor-made for you!</p>
              <button>SEE MORE</button>
            </SlideContent>
          </SlideItem>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default SliderComponent;
