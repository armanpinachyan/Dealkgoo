import React, { Component } from 'react';
import Slider from 'react-slick';
import './slick1.scss';
import Icons from '../icons/icons';
import img from '../../assets/images/popular-cases-item/1.png';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="slider1">
        <Slider {...settings}>
          <div>
            <div>
              <div className="image d-flex justify-content-center align-items-center text-center">
                <img src={img} alt="img" width={150} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="image d-flex justify-content-center align-items-center text-center">
                <img src={img} alt="img" width={150} />
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="image d-flex justify-content-center align-items-center text-center">
                <img src={img} alt="img" width={150} />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
