import React from 'react';
import './popular-cases.scss';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import { RandomKey } from '../../utils/helpers';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import MainTemplate from '../../features/main-template/main-template';
import case_item1 from '../../assets/images/case-item1.png';
import case_item2 from '../../assets/images/case-item2.png';
import case_item3 from '../../assets/images/case-item3.png';
import pupular_item1 from '../../assets/images/popular-cases-item/1.png';
import pupular_item2 from '../../assets/images/popular-cases-item/2.png';
import pupular_item3 from '../../assets/images/popular-cases-item/3.png';
import pupular_item4 from '../../assets/images/popular-cases-item/4.png';
import pupular_item5 from '../../assets/images/popular-cases-item/5.png';
import pupular_item6 from '../../assets/images/popular-cases-item/6.png';
import pupular_item7 from '../../assets/images/popular-cases-item/7.png';
import pupular_item8 from '../../assets/images/popular-cases-item/8.png';
import logo1 from '../../assets/images/popular-cases-item/logo1.png';
import logo2 from '../../assets/images/popular-cases-item/logo2.png';
import logo3 from '../../assets/images/popular-cases-item/logo3.png';
import logo4 from '../../assets/images/popular-cases-item/logo4.png';
import logo5 from '../../assets/images/popular-cases-item/logo5.png';
import logo6 from '../../assets/images/popular-cases-item/logo6.png';
import logo7 from '../../assets/images/popular-cases-item/logo7.png';
import logo8 from '../../assets/images/popular-cases-item/logo8.png';
import CaseItem from '../../features/case-item/case-item';
import PopularCasesItem from '../../features/popular-cases-item/popular-case-item';
import Icons from '../../features/icons/icons';
import PopularCasesItemHover from '../../features/popular-cases-item/popular-cases-item-hover';
import SimpleSlider4 from '../../features/slick1/slick-top';
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
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true,
    hover_text: 'loremsdaasddassadadsadsasd',
    key1: 'tip',
    key2: 'kol-vo',
    key3: 'prodaj',
    key4: 'srok',
    key1_text: 'tip',
    key2_text: 'kol-vo',
    key3_text: 'prodaj',
    key4_text: 'srok'
  },
  {
    img: pupular_item2,
    width: 118,
    name: 'Супер VIP-ускоритель',
    title: 'Ранг',
    rating: '5.0',
    logo: logo2,
    price: '160 ₽ ',
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true,
    hover_text: 'loremsdaasddassadadsadsasd',
    key1: 'tip',
    key2: 'kol-vo',
    key3: 'prodaj',
    key4: 'srok',
    key1_text: 'tip',
    key2_text: 'kol-vo',
    key3_text: 'prodaj',
    key4_text: 'srok'
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
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item7,
    width: 145,
    name: 'АК-12 «Механика»',
    title: 'Оружие',
    rating: '4.9',
    logo: logo4,
    price: '17 ₽',
    icons_name: 'heart',
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
    icons_name: 'heart',
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
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item6,
    width: 171,
    name: 'Керамбит «Фараон»',
    title: 'Оружие',
    rating: '3.5',
    logo: logo7,
    price: '21  ₽',
    icons_name: 'heart',
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
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true
  }
];

const casiItemarr = [
  {
    bg: case_item1,
    ruletka: 'blue',
    text: 'FARM Case',
    price: '1 990 DG',
    btn: '#2763fe',
    filter: 'drop-shadow(0px 5px 12.5px rgba(0,0,0,0.3))'
  },
  {
    bg: case_item2,
    ruletka: 'yellow',
    text: 'YELLOW Case',
    price: '2 490 ₽',
    btn: '#feb348',
    filter: 'drop-shadow(0px 5px 12.5px rgba(0,0,0,0.3))',
    sale: '-15%'
  },
  {
    bg: case_item3,
    ruletka: 'red',
    text: 'ROSE Case',
    price: '750 ₽',
    btn: '#ff4567',
    filter: 'drop-shadow(0px 5px 12.5px rgba(0,0,0,0.3))'
  }
];

function PopularCases() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="popular-cases">
          <div className="slick-top mt-5">
            <SimpleSlider4 />
          </div>
          <h2 className="page-heading">Популярные кейсы</h2>
          <div className="row mt-0 pt-0">
            {casiItemarr.map((el) => (
              <CaseItem key={RandomKey()} casiItem={el} />
            ))}
          </div>
          <div className="row popular-cases-row">
            <h2 className="page-heading">Новый товар</h2>
            {popular_cases.map((elem) => {
              return <PopularCasesItemHover key={RandomKey()} elem={elem} />;
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

export default PopularCases;
