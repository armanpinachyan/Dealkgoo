import React from 'react';
import Slider from 'react-slick';
import { RandomKey } from '../../utils/helpers';
import img from '../../assets/images/slick-top.png';
import './slick-top.scss';
import name_logo from '../../assets/images/draw/gold.png';
import DefButton from '../def-button/def-button';
import Icons from '../icons/icons';

function SimpleSlider4() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div className="me-3">
        <div
          className="slick-top-items me-3"
          style={{
            backgroundImage: `url(${img})`
          }}>
          <div className="box1">
            <div className="title-box">
              <div className="title">Розыгрыш </div>
              <span className="subtitle">Бесплатно</span>
            </div>
            <div className="name">
              <img src={name_logo} alt="name" width={28} />
              <div>
                <h3>Аккаунт Warface</h3>
                <span> Мастер-сержант</span>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="data">
              <div className="data-box">
                <div className="number">23</div>
                <span>Часа</span>
              </div>
              <div className="data-box">
                <div className="number">16</div>
                <span>Мин</span>
              </div>
              <div className="data-box">
                <div className="number">23</div>
                <span>Сек</span>
              </div>
            </div>
            <DefButton
              bg="#2763ff"
              text={
                <>
                  <Icons className="me-2" name="chat" width={16} color="#fff" />
                  Присоединиться
                </>
              }
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className="slick-top-items"
          style={{
            backgroundImage: `url(${img})`
          }}>
          <div className="box1">
            <div className="title-box">
              <div className="title">Розыгрыш </div>
              <span className="subtitle">Бесплатно</span>
            </div>
            <div className="name">
              <img src={name_logo} alt="name" width={28} />
              <div>
                <h3>Аккаунт Warface</h3>
                <span> Мастер-сержант</span>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="data">
              <div className="data-box">
                <div className="number">23</div>
                <span>Часа</span>
              </div>
              <div className="data-box">
                <div className="number">16</div>
                <span>Мин</span>
              </div>
              <div className="data-box">
                <div className="number">23</div>
                <span>Сек</span>
              </div>
            </div>
            <DefButton
              bg="#2763ff"
              text={
                <>
                  <Icons className="me-2" name="chat" width={16} color="#fff" />
                  Присоединиться
                </>
              }
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className="slick-top-items"
          style={{
            backgroundImage: `url(${img})`
          }}>
          <div className="box1">
            <div className="title-box">
              <div className="title">Розыгрыш </div>
              <span className="subtitle">Бесплатно</span>
            </div>
            <div className="name">
              <img src={name_logo} alt="name" width={28} />
              <div>
                <h3>Аккаунт Warface</h3>
                <span> Мастер-сержант</span>
              </div>
            </div>
          </div>
          <div className="box2">
            <div className="data">
              <div className="data-box">
                <div className="number">23</div>
                <span>Часа</span>
              </div>
              <div className="data-box">
                <div className="number">16</div>
                <span>Мин</span>
              </div>
              <div className="data-box">
                <div className="number">23</div>
                <span>Сек</span>
              </div>
            </div>
            <DefButton
              bg="#2763ff"
              text={
                <>
                  <Icons className="me-2" name="chat" width={16} color="#fff" />
                  Присоединиться
                </>
              }
            />
          </div>
        </div>
      </div>
    </Slider>
  );
}

export default SimpleSlider4;
