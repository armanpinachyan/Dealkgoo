import React from 'react';
import './view-history.scss';
import MainTemplate from '../../features/main-template/main-template';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import { RandomKey } from '../../utils/helpers';
import Icons from '../../features/icons/icons';
import { Link } from 'react-router-dom';
import { Pagination } from '@mui/material';

const url = [
  {
    title: 'Аккаунт Warface за хорошие деньг',
    subtitle: 'Сервер: ru.warface, Ранг: 134, Тип: Перепродажа, Донат: 333.',
    price: '590 ₽',
    data: '16.05.23 10:45',
    icon_name: 'arrow-right-circle'
  },
  {
    title: 'Warface VIP-ускоритель',
    subtitle: 'После покупки вы получаете на почту, которую указали при оплате',
    price: '10 ₽',
    data: '15.05.23 06:30',
    icon_name: 'arrow-right-circle'
  },
  {
    title: 'Black Hawk «Тайга» (пин-код)',
    subtitle: 'Тип: Оружие, Кол-во: 33, Продажа от: 33 шт, Срок: Навсегда',
    price: '129 ₽',
    data: '14.05.23 19:02',
    icon_name: 'arrow-right-circle'
  },
  {
    title: 'Аккаунт Warface',
    subtitle: 'Сервер: ru.warface, Ранг: 60, Тип: Перепродажа, Донат: 100',
    price: '250 ₽',
    data: '13.05.23 16:30',
    icon_name: 'arrow-right-circle'
  },
  {
    title: 'Скин Awinaw на пистолет Mauser',
    subtitle: 'Тип: Оружие, Кол-во: 100, Продажа от: 1 шт, Срок: 1 день',
    price: '590 ₽',
    data: '16.05.23 10:45',
    icon_name: 'arrow-right-circle'
  },
  {
    title: 'Золотой HArms CQR',
    subtitle: 'Тип: Оружие, Кол-во: 100, Продажа от: 1 шт, Срок: 1 день копия',
    price: '378 ₽',
    data: '09.05.23 13:22',
    icon_name: 'arrow-right-circle'
  },
  {
    title: 'Шлем «атлас» инженер',
    subtitle: 'Сервер: ru.warface, Ранг: 134, Тип: Перепродажа, Донат: 333.',
    price: '120 ₽',
    data: '06.05.23 20:00',
    icon_name: 'arrow-right-circle'
  }
];

function ViewHistory() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="view-history">
          <div className="view-history-head">
            <h2 className="page-heading">
              История просмотров
              <span className="fs-16">(262)</span>
            </h2>
          </div>
          <div className="dashboard-home-body-scroll">
            <div className="view-history-inner">
              {url.map((elem) => (
                <div key={RandomKey()} className="view-history-inner-item">
                  <div className="box1">
                    <div className="icon icon-white">
                      <Icons name="eye" width={20} height={20} />
                    </div>
                    <div className="title">{elem.title}</div>
                    <span>{elem.subtitle}</span>
                  </div>
                  <div className="box2">
                    <span className="price">{elem.price}</span>
                    <span className="data">{elem.data}</span>
                    <div className="link-to icon-darkBlue">
                      <Link to="/">
                        <Icons name={elem.icon_name} width={40} height={40} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <DashboardFooter />
          </div>
          <div className="d-flex justify-content-center align-items-center ">
            <Pagination count={10} color="primary" className="def-pagination" />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default ViewHistory;
