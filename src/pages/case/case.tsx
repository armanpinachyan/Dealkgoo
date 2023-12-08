import React from 'react';
import './case.scss';
import MainTemplate from '../../features/main-template/main-template';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import Prize from '../../features/prize/prize';
import prize_logo1 from '../../assets/images/case/logo1.png';
import prize_logo2 from '../../assets/images/case/logo2.png';
import prize_logo3 from '../../assets/images/case/logo3.png';
import prize_logo4 from '../../assets/images/case/logo4.png';
import prize_logo5 from '../../assets/images/case/logo5.png';
import prize_logo6 from '../../assets/images/case/logo6.png';
import prize_logo7 from '../../assets/images/case/logo7.png';
import prize_logo8 from '../../assets/images/case/logo8.png';
import prize_logo9 from '../../assets/images/case/logo9.png';
import prize_logo10 from '../../assets/images/case/logo10.png';
import prize_logo11 from '../../assets/images/case/logo11.png';
import prize_logo12 from '../../assets/images/case/logo12.png';
import { RandomKey } from '../../utils/helpers';
import DefaultTabs from '../../features/default-tabs/default-tabs';
import YourChoice from './components/your-choice';
import styled from 'styled-components';
import Icons from '../../features/icons/icons';
import DefButton from '../../features/def-button/def-button';
import pupular_item4 from '../../assets/images/popular-cases-item/4.png';
import logo5 from '../../assets/images/popular-cases-item/logo5.png';
import pupular_item5 from '../../assets/images/popular-cases-item/5.png';
import logo6 from '../../assets/images/popular-cases-item/logo6.png';
import pupular_item6 from '../../assets/images/popular-cases-item/6.png';
import logo7 from '../../assets/images/popular-cases-item/logo7.png';
import pupular_item8 from '../../assets/images/popular-cases-item/8.png';
import logo8 from '../../assets/images/popular-cases-item/logo8.png';
import pupular_item9 from '../../assets/images/popular-cases-item/9.png';
import pupular_item10 from '../../assets/images/popular-cases-item/10.png';
import pupular_item11 from '../../assets/images/popular-cases-item/11.png';
import pupular_item12 from '../../assets/images/popular-cases-item/12.png';
import Slider from './components/slider';
import Drum from './components/drum';
import { Pagination } from '@mui/material';

const product_item = [
  {
    img: pupular_item4,
    width: 144,
    name: 'Штурмовик Элитного отряда',
    title: 'Оружие',
    rating: '4.8',
    logo: logo5,
    price: '115 ₽',
    icons_name: 'heart-full',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item5,
    width: 115,
    name: 'Перчатки штурмовика Blackwood',
    title: 'Оружие',
    rating: '5.0',
    logo: logo6,
    price: '50 ₽',
    icons_name: 'heart-full',
    new_btn_text: 'Новинка',
    new_btn: false
  },
  {
    img: pupular_item6,
    width: 171,
    name: 'Керамбит «Фараон»',
    title: 'Оружие',
    rating: '3.5',
    logo: logo7,
    price: '21  ₽',
    icons_name: 'heart-full',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item8,
    width: 140,
    name: 'Знак «Тигр»',
    title: 'Нашивка',
    rating: '4.9',
    logo: logo8,
    price: '799 ₽',
    icons_name: 'heart-full',
    new_btn_text: 'Хит продаж',
    btn_color: 'yellow',
    new_btn: true
  },
  {
    img: pupular_item9,
    width: 192,
    name: 'Золотой HArms CQR',
    title: 'Оружие',
    rating: '4.5',
    logo: logo5,
    price: '378 ₽',
    icons_name: 'heart-full',
    new_btn_text: 'Гарантия',
    btn_color: 'green',
    new_btn: true
  },
  {
    img: pupular_item10,
    width: 108,
    name: 'Micro Desert Eagle',
    title: 'Оружие',
    rating: '4.9',
    logo: logo6,
    price: '100  ₽',
    icons_name: 'heart-full',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item11,
    width: 217,
    name: 'IWI Carmel «Ацтек»',
    title: 'Оружие',
    rating: '4.0',
    logo: logo7,
    price: '600  ₽',
    icons_name: 'heart-full',
    new_btn_text: 'Новинка',
    new_btn: false
  },
  {
    img: pupular_item12,
    width: 100,
    name: 'Шлем «атлас» инженер',
    title: 'Нашивка',
    rating: '3.5',
    logo: logo8,
    price: '155  ₽',
    icons_name: 'heart-full',
    new_btn_text: 'Новинка',
    new_btn: true
  }
];

const CaseItem = [
  {
    name: 'Лучший приз',
    title: 'Typhoon F12',
    subtitle: 'Камуфляж «Гидра»',
    bg: '#fc274e',
    img: prize_logo1
  },
  {
    name: 'Приз',
    title: 'Typhoon F12',
    subtitle: 'Анубис',
    bg: '#2763ff',
    img: prize_logo2
  },
  {
    name: 'Приз',
    title: 'Typhoon F12',
    subtitle: 'Черная м...',
    bg: '#feb348',
    img: prize_logo3
  },
  {
    name: 'Приз',
    title: 'Typhoon F12',
    subtitle: 'Fostech Ori...',
    bg: '#93d43f',
    img: prize_logo4
  },
  {
    name: 'Приз',
    title: 'Typhoon F12',
    subtitle: 'Механика',
    bg: '#a648fe',
    img: prize_logo5
  },
  {
    name: 'Приз',
    title: 'Typhoon F12',
    subtitle: 'SIG Sauer',
    bg: '#00d8ff',
    img: prize_logo6
  },
  {
    name: 'Приз',
    title: 'Typhoon F12',
    subtitle: 'Медуза',
    bg: '#ff0000',
    img: prize_logo7
  },
  {
    name: 'Приз',
    title: 'Typhoon F12',
    subtitle: 'Open Cup',
    bg: '#f87a7a',
    img: prize_logo8
  },
  {
    name: 'Приз',
    title: 'Typhoon F12',
    subtitle: 'Тайга',
    bg: '#17073c',
    img: prize_logo9
  },
  {
    name: 'Приз',
    title: 'Typhoon F12',
    subtitle: 'Скорость',
    bg: '#f1c484',
    img: prize_logo10
  },
  {
    name: 'Приз',
    title: 'Typhoon F12',
    subtitle: 'Тесак Дор',
    bg: '#2763ff',
    img: prize_logo11
  },
  {
    name: 'Приз',
    title: 'Typhoon F12',
    subtitle: 'Desert Tech',
    bg: '#feb348',
    img: prize_logo12
  }
];

const tabContents = [
  {
    name: 'Лента',
    body: <Slider />
  },
  {
    name: 'Карточки',
    body: <YourChoice />
  },
  {
    name: 'Барабан',
    body: <Drum />
  }
];

function Case() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="case">
          <h2 className="page-heading">Кейс DG</h2>
          <div className="prize">
            {CaseItem.map((elem, index) => (
              <Prize key={RandomKey()} elem={{ ...elem, index }} />
            ))}
          </div>
          <div className="case-table ">
            <DefaultTabs key={RandomKey()} tabContents={tabContents} />
          </div>

          <h2 className="page-heading">Что можно выиграть?</h2>
          <div className="row mt-5">
            {product_item.map((elem) => (
              <div key={RandomKey()} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
                <div className="popular-cases-row-box">
                  <div className="image flex-c-c">
                    <div className="img">
                      <img src={elem.img} width={elem.width} alt="img" />
                    </div>
                  </div>
                  <div className="ratting-bloc">
                    <h5 className="title">{elem.name}</h5>
                    <span className="sub-title">{elem.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center mt-20">
            <Pagination count={10} color="primary" className="def-pagination" />
          </div>

          <DashboardFooter />
        </div>
      </div>
    </MainTemplate>
  );
}

export default Case;
