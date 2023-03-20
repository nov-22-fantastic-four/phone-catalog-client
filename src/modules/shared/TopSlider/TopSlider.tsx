import React from 'react';
import Slider from 'react-slick';
import banner from '../../../images/banner-desktop.png';
import next_icon from '../../../images/icons/chevron-right-black.svg';
import prev_icon from '../../../images/icons/chevron-left-black.svg';

import './TopSlider.scss';

interface Props {
  className: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  icon: string;
};

function Arrow(props: Props): JSX.Element {
  const { className, onClick, icon } = props;

  return <div className={className} onClick={onClick} >
    <img src={icon} alt="" className='top-slider-icon'/>
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
          <img src={banner} alt="" className='top-slider-photo'/>
        </div>
        <div className='slick-slide'>
          <img src={banner} alt="" className='top-slider-photo'/>
        </div>
        <div className='slick-slide'>
          <img src={banner} alt="" className='top-slider-photo'/>
        </div>
      </Slider>
    </div>
  );
};
