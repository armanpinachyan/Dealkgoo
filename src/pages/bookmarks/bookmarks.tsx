import React from 'react';
import './bookmarks.scss';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import { RandomKey } from '../../utils/helpers';
import PopularCasesItem from '../../features/popular-cases-item/popular-case-item';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import MainTemplate from '../../features/main-template/main-template';
import pupular_item1 from '../../assets/images/popular-cases-item/1.png';
import pupular_item2 from '../../assets/images/popular-cases-item/2.png';
import pupular_item3 from '../../assets/images/popular-cases-item/3.png';
import pupular_item7 from '../../assets/images/popular-cases-item/7.png';
import pupular_item4 from '../../assets/images/popular-cases-item/4.png';
import pupular_item5 from '../../assets/images/popular-cases-item/5.png';
import pupular_item6 from '../../assets/images/popular-cases-item/6.png';
import pupular_item8 from '../../assets/images/popular-cases-item/8.png';
import pupular_item9 from '../../assets/images/popular-cases-item/9.png';
import pupular_item10 from '../../assets/images/popular-cases-item/10.png';
import pupular_item11 from '../../assets/images/popular-cases-item/11.png';
import pupular_item12 from '../../assets/images/popular-cases-item/12.png';
import logo1 from '../../assets/images/popular-cases-item/logo1.png';
import logo2 from '../../assets/images/popular-cases-item/logo2.png';
import logo3 from '../../assets/images/popular-cases-item/logo3.png';
import logo4 from '../../assets/images/popular-cases-item/logo4.png';
import logo5 from '../../assets/images/popular-cases-item/logo5.png';
import logo6 from '../../assets/images/popular-cases-item/logo6.png';
import logo7 from '../../assets/images/popular-cases-item/logo7.png';
import logo8 from '../../assets/images/popular-cases-item/logo8.png';

import Icons from '../../features/icons/icons';
import { Pagination } from '@mui/material';

const popular_cases = [
  {
    img: pupular_item1,
    width: 149,
    name: 'Makmilan Gr-23',
    title: 'Оружие',
    rating: '4.8',
    logo: logo1,
    price: '590 ₽',
    icons_name: 'heart-full',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item2,
    width: 118,
    name: 'Супер VIP-ускоритель',
    title: 'Ранг',
    rating: '5.0',
    logo: logo2,
    price: '160 ₽ ',
    icons_name: 'heart-full',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item3,
    width: 173,
    name: 'Катана - Любая версия',
    title: 'Оружие',
    rating: '3.5',
    logo: logo3,
    price: '50 ₽',
    sale: '-30%',
    icons_name: 'heart-full',
    new_btn_text: 'Новинка',
    new_btn: false
  },
  {
    img: pupular_item7,
    width: 145,
    name: 'АК-12 «Механика»',
    title: 'Оружие',
    rating: '4.9',
    logo: logo4,
    price: '17 ₽',
    icons_name: 'heart-full',
    new_btn_text: 'Новинка',
    new_btn: true
  },
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

function Bookmarks() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="bookmarks">
          <div className="row bookmarks-row">
            <div className="bookmarks-head-box">
              <h2 className="page-heading bookmarks-head">Закладки</h2>
              <button className="delete">
                <Icons color="#d6d9ef" name="delete" width={16} className="me-2" />
                Очистить
              </button>
            </div>
            {popular_cases.map((elem) => {
              return <PopularCasesItem key={RandomKey()} elem={elem} />;
            })}
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

export default Bookmarks;
