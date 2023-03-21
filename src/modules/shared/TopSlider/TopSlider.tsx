import React from 'react';
import Slider from 'react-slick';
import iphone11 from '../../../images/banner-desktop-iphone11.png';
import iphone11M from '../../../images/banner-mobile-iphone11.png';
import iphone11Pro from '../../../images/banner-desktop-iphone11pro.png';
import iphone11ProM from '../../../images/banner-mobile-iphone11pro.png';
import iphone11ProMax from '../../../images/banner-desktop-iphone11proMax.png';
import iphone11ProMaxM from '../../../images/banner-mobile-iphone11proMax.png';
import next_icon from '../../../images/icons/chevron-right-black.svg';
import prev_icon from '../../../images/icons/chevron-left-black.svg';

import './TopSlider.scss';
import { Link } from 'react-router-dom';

interface Props {
  className: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon: string;
};

function Arrow(props: Props): JSX.Element {
  const { className, onClick, icon } = props;

  return <div className={className} onClick={onClick} >
    <img
      src={icon}
      alt="arrow"
      className='top-slider-icon'
    />
  </div>;
}

export const TopSlider: React.FC = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 5000,
    nextArrow: <Arrow className="slick-next slick-arrow" icon={next_icon}/>,
    prevArrow: <Arrow className="slick-prev slick-arrow" icon={prev_icon}/>,
  };

  return (
    <div className="top-slider">
      <Slider {...settings}>
        <div className='slick-slide'>
          <Link
            to='/phones/apple-iphone-11-256gb-red'
          >
            <img
              src={iphone11}
              alt="iphone11"
              id='top-slider-photo'
            />
            <img
              src={iphone11M}
              alt="iphone11"
              id='top-slider-photo-mobile'
            />
          </Link>
        </div>
        <div className='slick-slide'>
          <Link
            to='/phones/apple-iphone-11-pro-512gb-midnightgreen'
          >
            <img
              src={iphone11Pro}
              alt="iphone11Pro"
              id='top-slider-photo'
            />
            <img
              src={iphone11ProM}
              alt="iphone11Pro"
              id='top-slider-photo-mobile'
            />
          </Link>
        </div>
        <div className='slick-slide'>
          <Link
            to='/phones/apple-iphone-11-pro-max-512gb-spacegray'
          >
            <img
              src={iphone11ProMax}
              alt="iphone11ProMax"
              id='top-slider-photo'
            />
            <img
              src={iphone11ProMaxM}
              alt="iphone11ProMax"
              id='top-slider-photo-mobile'
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
};
