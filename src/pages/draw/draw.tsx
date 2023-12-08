import React from 'react';
import './draw.scss';
import MainTemplate from '../../features/main-template/main-template';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import img from '../../assets/images/game-selection/1.png';
import name_logo from '../../assets/images/draw/gold.png';
import DefButton from '../../features/def-button/def-button';
import Icons from '../../features/icons/icons';
import win_logo from '../../assets/images/draw/win.png';
import top1 from '../../assets/images/draw/top1.png';
import top2 from '../../assets/images/draw/top2.png';
import top3 from '../../assets/images/draw/top3.png';
import top4 from '../../assets/images/draw/top4.png';
import top5 from '../../assets/images/draw/top5.png';
import top6 from '../../assets/images/draw/top6.png';
import top7 from '../../assets/images/draw/top7.png';
import top8 from '../../assets/images/draw/top8.png';
import { RandomKey } from '../../utils/helpers';
import { Pagination } from '@mui/material';

const topUrl = [
  {
    number: '№4',
    logo: top1,
    name: 'DungeonPacket',
    price1: '34 219 ₽ ',
    price1_title: 'Купленные товары',
    price2: '118 523 ₽ ',
    price2_title: 'Заработанно'
  },
  {
    number: '№5',
    logo: top2,
    name: 'DrizzleChandler',
    price1: '34 219 ₽ ',
    price1_title: 'Купленные товары',
    price2: '118 523 ₽ ',
    price2_title: 'Заработанно'
  },
  {
    number: '№6',
    logo: top3,
    name: 'ChilledLefty',
    price1: '34 219 ₽ ',
    price1_title: 'Купленные товары',
    price2: '118 523 ₽ ',
    price2_title: 'Заработанно'
  },
  {
    number: '№7',
    logo: top4,
    name: 'TabbyArbor',
    price1: '34 219 ₽ ',
    price1_title: 'Купленные товары',
    price2: '118 523 ₽ ',
    price2_title: 'Заработанно'
  },
  {
    number: '№8',
    logo: top5,
    name: 'SecretiveGravy',
    price1: '34 219 ₽ ',
    price1_title: 'Купленные товары',
    price2: '118 523 ₽ ',
    price2_title: 'Заработанно'
  },
  {
    number: '№9',
    logo: top6,
    name: 'SportyBirch',
    price1: '34 219 ₽ ',
    price1_title: 'Купленные товары',
    price2: '118 523 ₽ ',
    price2_title: 'Заработанно'
  },
  {
    number: '№10',
    logo: top7,
    name: 'ExaltCellphone',
    price1: '34 219 ₽ ',
    price1_title: 'Купленные товары',
    price2: '118 523 ₽ ',
    price2_title: 'Заработанно'
  }
];

const yourPlace = [
  {
    number: '№10 296',
    logo: top8,
    name: 'AssassinErt',
    price1: '34 219 ₽ ',
    price1_title: 'Купленные товары',
    price2: '118 523 ₽ ',
    price2_title: 'Заработанно'
  }
];

function Draw() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="draw">
          <h2 className="page-heading">Розыгрыш</h2>
          <div className="row">
            <div className="col-lg-8 col-12 mb-lg-0 mb-3">
              <div
                className="col-box"
                style={{
                  backgroundImage: `url(${img})`
                }}>
                <div className="bg" />
                <div className="name">
                  <img src={name_logo} alt="name" width={28} />
                  <div>
                    <h3>Аккаунт Warface</h3>
                    <span> Мастер-сержант</span>
                  </div>
                </div>
                <div className="text">
                  Чтобы принять участие, <br />
                  вы должны подписаться на нашу <span>VK группу</span>
                </div>
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
                <div className="buttons">
                  <DefButton
                    bg="#2763ff"
                    text={
                      <>
                        <Icons name="vk" width={16} color="#fff" className="me-2" />
                        Подписаться
                      </>
                    }
                  />
                  <DefButton
                    className="draw-btn"
                    bg="transparent"
                    text={
                      <>
                        <Icons name="check-circle" width={16} color="#fff" className="me-2" />
                        Участвовать
                      </>
                    }
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12">
              <div className="col-box2">
                <div className="text">
                  UnionDelight
                  <span className="c-grey"> 1 место</span>
                </div>
                <div className="win-logo">
                  <img src={win_logo} alt="win" />
                </div>
                <DefButton
                  className="win-btn"
                  filter="drop-shadow(0px 5px 12.5px rgba(255,215,0,0.3))"
                  bg="#ffd700"
                  text="Последний победитель"
                />
                <div className="price-bloc">
                  <div className="price">
                    34 219 ₽<span className="c-grey">Купленные товары </span>
                  </div>
                  <div className="price">
                    118 523 ₽<span className="c-grey">Заработанно </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h2 className="page-heading">Топ 10</h2>
          <div className="top">
            {topUrl.map((el) => (
              <div key={RandomKey()} className="top-item ">
                <div className="box1">
                  <span className="number">{el.number}</span>
                  <div className="logo">
                    <img src={el.logo} alt="top1" />
                  </div>
                  <h5 className="name">{el.name}</h5>
                </div>
                <div className="box2">
                  <div className="price-bloc">
                    <div className="price">
                      {el.price1}
                      <span className="c-grey">{el.price1_title}</span>
                    </div>
                    <div className="price">
                      {el.price2}
                      <span className="c-grey">{el.price2_title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h2 className="page-heading">Ваше место</h2>
          <div className="top">
            {yourPlace.map((el) => (
              <div key={RandomKey()} className="top-item ">
                <div className="box1">
                  <span className="number">{el.number}</span>
                  <div className="logo">
                    <img src={el.logo} alt="top1" />
                  </div>
                  <h5 className="name">{el.name}</h5>
                </div>
                <div className="box2">
                  <div className="price-bloc">
                    <div className="price">
                      {el.price1}
                      <span className="c-grey">{el.price1_title}</span>
                    </div>
                    <div className="price">
                      {el.price2}
                      <span className="c-grey">{el.price2_title}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="d-flex justify-content-center align-items-center mt-20">
              <Pagination count={10} color="primary" className="def-pagination" />
            </div>
          </div>
        </div>
        <DashboardFooter />
      </div>
    </MainTemplate>
  );
}

export default Draw;
