import React from 'react';
import './notification.scss';
import MainTemplate from '../../features/main-template/main-template';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import { RandomKey } from '../../utils/helpers';
import Icons from '../../features/icons/icons';
import { Link } from 'react-router-dom';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import { Pagination } from '@mui/material';

const url = [
  {
    title: (
      <>
        Товар по вашему запросу был <span className="text-blue c-blue ps-1 pe-1"> выставлен</span>{' '}
        на продажу!
      </>
    ),
    key: 'Стол заказа:',
    data: '16.05.23 10:45',
    icon_name: 'right-arrow-svgrepo',
    logo: 'stol-zak',
    disabled: false
  },
  {
    title: <>Вы получили новое достижение за покупки на сайте</>,
    key: 'Достижения:',
    data: '15.05.23 06:30',
    icon_name: 'right-arrow-svgrepo',
    logo: 'awards',
    disabled: true
  },
  {
    title: (
      <>
        На ваш баланс поступил платеж в размере <b className="ps-1">2 490 ₽</b>
      </>
    ),
    key: 'Пополение:',
    data: '14.05.23 19:02 ',
    icon_name: 'right-arrow-svgrepo',
    logo: 'wallet',
    disabled: false
  },
  {
    title: (
      <>
        Товар по вашему запросу был <span className="text-blue c-blue ps-1 pe-1"> выставлен</span>{' '}
        на продажу!
      </>
    ),
    key: 'Стол заказа:',
    data: '13.05.23 16:30 ',
    icon_name: 'right-arrow-svgrepo',
    logo: 'stol-zak',
    disabled: false
  },
  {
    title: (
      <>
        Вы получили бонус за активность Т <b className="ps-1">+ 500 ₽</b>
      </>
    ),
    key: 'Бонус:',
    data: '12.05.23 12:59',
    icon_name: 'right-arrow-svgrepo',
    logo: 'gift',
    disabled: false
  },
  {
    title: <>Вы получили новое достижение за покупки на сайте</>,
    key: 'Достижения:',
    data: '09.05.23 13:22',
    icon_name: 'right-arrow-svgrepo',
    logo: 'awards',
    disabled: true
  },
  {
    title: (
      <>
        На ваш баланс поступил платеж в размере <b className="ps-1">2 490 ₽</b>
      </>
    ),
    key: 'Пополение:',
    data: '14.05.23 19:02 ',
    icon_name: 'right-arrow-svgrepo',
    logo: 'wallet',
    disabled: false
  },
  {
    title: (
      <>
        Товар по вашему запросу был <span className="text-blue c-blue ps-1 pe-1"> выставлен</span>{' '}
        на продажу!
      </>
    ),
    key: 'Стол заказа:',
    data: '13.05.23 16:30 ',
    icon_name: 'right-arrow-svgrepo',
    logo: 'stol-zak',
    disabled: false
  },
  {
    title: (
      <>
        Вы получили бонус за активность Т <b className="ps-1">+ 500 ₽</b>
      </>
    ),
    key: 'Бонус:',
    data: '12.05.23 12:59',
    icon_name: 'right-arrow-svgrepo',
    logo: 'gift',
    disabled: false
  },
  {
    title: <>Вы получили новое достижение за покупки на сайте</>,
    key: 'Достижения:',
    data: '09.05.23 13:22',
    icon_name: 'right-arrow-svgrepo',
    logo: 'awards',
    disabled: true
  }
];

function Notification() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="notification">
          <div className="notification-head">
            <h2 className="page-heading">
              Ваши уведломения
              <span className="fs-16">(1602)</span>
            </h2>
          </div>
          <div className="dashboard-home-body-scroll">
            <div className="notification-inner">
              {url.map((elem) => (
                <div key={RandomKey()} className="notification-inner-item">
                  <div className="box1">
                    <div className="icon">
                      <Icons name={elem.logo} color="#fff" width={20} height={20} />
                    </div>
                    <div className="title c-grey d-flex align-items-center">
                      <span>{elem.key}</span>
                      {elem.title}
                    </div>
                  </div>
                  <div className="box2">
                    <span className="data">{elem.data}</span>
                    <div className={`link-to ${elem.disabled ? 'link-to' : 'disabled'}`}>
                      <Link to="/">
                        <Icons
                          color={`${elem.disabled ? '#2763fe' : '#3333'}`}
                          width={16}
                          name={elem.icon_name}
                        />
                      </Link>
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
      </div>
    </MainTemplate>
  );
}

export default Notification;
