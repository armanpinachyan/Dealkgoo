import React from 'react';
import './finance.scss';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import MainTemplate from '../../features/main-template/main-template';
import DefaultTabs from '../../features/default-tabs/default-tabs';
import { RandomKey } from '../../utils/helpers';
import Icons from '../../features/icons/icons';
import DefButton from '../../features/def-button/def-button';
import { Pagination } from '@mui/material';

function FinanceItem() {
  return (
    <div className="Table-body">
      <div className="box1">
        <span className="number">№1574</span>
        <div className="balance">
          Вывод баланса
          <span className="balance-number">#2478271</span>
        </div>
      </div>
      <div className="box2">
        <span className="title">Ожидание 48 часов.</span>
        <span className="price">+163.50 ₽</span>
        <span className="data">15.02.2023, 22:12</span>
        <div className="close icon-pink">
          <div className="icon-close">
            <Icons name="close" width={16} height={16} />
          </div>
          15.02.2023, 22:12
        </div>
      </div>
    </div>
  );
}

const tabContents = [
  {
    name: 'Все операции',
    body: (
      <>
        {Array.from({ length: 5 }).map(() => (
          <FinanceItem key={RandomKey()} />
        ))}
        <div className="d-flex justify-content-center align-items-center mt-40">
          <Pagination count={10} color="primary" className="def-pagination" />
        </div>
      </>
    )
  },
  {
    name: 'История пополнения',
    body: 'История пополнения'
  },
  {
    name: 'История вывода',
    body: 'История вывода'
  },
  {
    name: 'Расходы',
    body: 'Расходы'
  },
  {
    name: 'Заработанно',
    body: 'Заработанно'
  }
];

function Finance() {
  return (
    <MainTemplate className="dashboard">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="finance">
          <div className="finance-head">
            <h2 className="page-heading">Финансы</h2>
          </div>
          <div className="finance-wrapper">
            <div className="box1">
              <div className="price">
                <span className="price">8 163.50 ₽</span>
                <span className="title">Общий баланс</span>
              </div>
              <div className="price">
                <span className="price">+163 230.50 ₽ </span>
                <span className="title">За все время</span>
              </div>
            </div>
            <div className="box2">
              <DefButton
                className="btn1"
                text="Вывести средства"
                bg="#ff4567"
                filter="drop-shadow(0px 5px 12.5px rgba(255,69,103,0.3))"
              />
              <DefButton
                text="Пополнить баланс"
                bg="#93d43f"
                filter="drop-shadow(0px 5px 12.5px rgba(147,212,63,0.3))"
              />
            </div>
          </div>
          <div className="view-history-inner mt-19">
            <DefaultTabs tabContents={tabContents} />
          </div>
          <DashboardFooter />
        </div>
      </div>
    </MainTemplate>
  );
}

export default Finance;
