import React from 'react';
import './rating-warface.scss';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import CaseItem from '../../features/case-item/case-item';
import { RandomKey } from '../../utils/helpers';
import PopularCasesItem from '../../features/popular-cases-item/popular-case-item';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import MainTemplate from '../../features/main-template/main-template';
import Icons from '../../features/icons/icons';
import SimpleSlider from '../../features/slick1/slick1';
import PurchasesSalesItem from '../purchases-sales/component/purchases-sales-item';
import DefaultTabs from '../../features/default-tabs/default-tabs';
import RatingWarfaceTableItem from './component/rating-warface-table-item';
import SimpleSlider2 from '../../features/slick1/slick2';
import Select from '../../features/def-select/def-select';
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
import { Pagination } from '@mui/material';

const tabContents = [
  {
    name: 'Персонаж (01)',
    body: <RatingWarfaceTableItem />
  },
  {
    name: 'Персонаж (02)',
    body: 'Персонаж (02)'
  },
  {
    name: 'Персонаж (03)',
    body: 'Персонаж (03)'
  }
];

const popular_cases = [
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

function RatingWarface() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="rating-warface">
          <div className="rating-warface-head">
            <div className="back">
              <Icons name="arrow-left" width={16} color="#2763ff" />
            </div>
            <h2 className="page-heading">Топ 10 в рейтинге WarFace</h2>
          </div>
          <div className="row mt-4">
            <div className="col-lg-4 col-md-6 col-12 mb-lg-0 mb-3">
              <div className="col-box-slider">
                <div className="slider-item">
                  <div className="d-flex justify-content-between align-items-center">
                    <button className="def-btn-mini">Новинка</button>
                    <div className="icons">
                      <Icons name="heart" width={16} color="#ff0000" />
                    </div>
                  </div>
                  <SimpleSlider />
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-12">
              <div className="col-box">
                <DefaultTabs change={true} tabContents={tabContents} />
              </div>
            </div>
          </div>
          <div className="slider-wrapper">
            <h3>Описание</h3>
            <p>
              Лос-Сантос – некогда великолепный городок, попасть в который мечтали миллионы. Сегодня
              он стал просто пристанищем вышедших в тираж звезд. <br /> Здесь мало интересных
              событий и планомерно текущая жизнь. Хотите отравить существование обеспеченных жителей
              и заставить забыть о покое всю <br /> <br /> местную полицию? Тогда вам стоит купить
              Grand Theft Auto V на steampay.com! То, что предложили в этой серии разработчики,
              гарантировано приведёт вас в <br /> неописуемый восторг. Так что не теряйте времени
              даром и начните играть прямо сейчас!
            </p>
            <SimpleSlider2 />
          </div>
          <div className="similar-product">
            <div className="similar-product-head">
              <h2 className="page-heading">Схожие товары</h2>
              <div className="w200">
                <Select items={['По популярности', 'По популярности']} />
              </div>
            </div>
            <div className="row">
              {popular_cases.map((elem) => {
                return <PopularCasesItem key={RandomKey()} elem={elem} />;
              })}
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-40">
          <Pagination count={10} color="primary" className="def-pagination" />
        </div>
        <DashboardFooter />
      </div>
    </MainTemplate>
  );
}

export default RatingWarface;
