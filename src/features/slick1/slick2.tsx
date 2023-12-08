import React from 'react';
import Slider from 'react-slick';
import './slick2.scss';
import img1 from '../../assets/images/slider1.png';
import img2 from '../../assets/images/slider2.png';
import img3 from '../../assets/images/slider3.png';
import img4 from '../../assets/images/slider4.png';
import { RandomKey } from '../../utils/helpers';
import Icons from '../icons/icons';

function SimpleSlider2() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: (
      <button className="slider2-arrow">
        <Icons name="down-arrow" width={20} />
      </button>
    ),
    prevArrow: (
      <button className="slider2-arrow">
        <Icons name="down-arrow" width={20} />
      </button>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  const items = [img1, img2, img3, img4, img1, img2];
  return (
    <div className="slider2">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={RandomKey()} className="slic-item">
            <div
              className="slic-item-img"
              style={{
                backgroundImage: `url(${item})`
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider2;
