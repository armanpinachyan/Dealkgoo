import React from 'react';
import './random-item.scss';
import case_item1 from '../../assets/images/case-item1.png';
import case_item2 from '../../assets/images/case-item2.png';
import case_item3 from '../../assets/images/case-item3.png';
import case_item4 from '../../assets/images/case-item4.png';
import case_item44 from '../../assets/images/case-item44.png';
import case_item5 from '../../assets/images/case-item5.png';
import case_item6 from '../../assets/images/case-item6.png';
import case_item7 from '../../assets/images/case-item7.png';
import case_item8 from '../../assets/images/case-item8.png';
import CaseItem from '../../features/case-item/case-item';
import { RandomKey } from '../../utils/helpers';
import MainTemplate from '../../features/main-template/main-template';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import { Pagination } from '@mui/material';

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
  },
  {
    bg: case_item4,
    ruletka: 'green',
    text: 'GREEN Case',
    price: '1 990 DG',
    btn: '#93d43f',
    filter: 'drop-shadow(0px 5px 12.5px rgba(147,212,63,0.3))'
  },
  {
    bg: case_item44,
    ruletka: 'purple',
    text: 'PURPLE Case',
    price: '2 490 ₽',
    btn: '#a648fe',
    filter: 'drop-shadow(0px 5px 12.5px rgba(166,72,254,0.3))',
    sale: '-15%'
  },
  {
    bg: case_item5,
    ruletka: 'light',
    text: 'TURQ Case',
    price: '750 ₽',
    btn: '#00d8ff',
    filter: 'drop-shadow(0px 5px 12.5px rgba(0,255,252,0.3))'
  },
  {
    bg: case_item6,
    ruletka: 'red2',
    text: 'RED Case',
    price: '1 990 DG',
    btn: '#ff0000',
    filter: 'drop-shadow(0px 5px 12.5px rgba(255,0,0,0.3))'
  },
  {
    bg: case_item7,
    ruletka: 'pink',
    text: 'BRONSE Case',
    price: '2 490 ₽',
    btn: '#f87a7a',
    filter: 'drop-shadow(0px 5px 12.5px rgba(248,122,122,0.3))',
    sale: '-15%'
  },
  {
    bg: case_item8,
    ruletka: 'dark-blue',
    text: 'BLACK Case ',
    price: '750 ₽',
    btn: '#17073c',
    filter: 'drop-shadow(0px 5px 12.5px rgba(23,7,60,0.3))'
  }
];

function RandomItem() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="random-items">
          <h2 className="page-heading">Случайный предмет</h2>
          <div className="row">
            {casiItemarr.map((casiItem) => (
              <CaseItem key={RandomKey()} casiItem={casiItem} />
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

export default RandomItem;
