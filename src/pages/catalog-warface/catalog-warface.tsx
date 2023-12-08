import React, { useState } from 'react';
import './catalog-warface.scss';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DefButton from '../../features/def-button/def-button';
import DefaultTabs from '../../features/default-tabs/default-tabs';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import MainTemplate from '../../features/main-template/main-template';
import Icons from '../../features/icons/icons';
import { RandomKey } from '../../utils/helpers';
import game1 from '../../assets/icons/game1.png';
import rating_icon from '../../assets/icons/rating-icon.png';
import { Drawer, Pagination, Slider } from '@mui/material';
import styled from 'styled-components';
import FinanceItem from './components/finance-item';
import CatalogSelect from './components/catalog-select';
import Filter from './components/filter';

const tabContents = [
  {
    name: 'Робуксы',
    body: Array.from({ length: 5 }).map(() => <FinanceItem key={RandomKey()} />)
  },
  {
    name: 'Донат робуксов (паки)',
    body: 'Донат робуксов (паки)'
  },
  {
    name: 'Подарочные карты',
    body: 'Подарочные карты'
  },
  {
    name: 'Аккаунты',
    body: 'Аккаунты'
  },
  {
    name: 'Буст РМ',
    body: 'Аккаунты'
  },
  {
    name: 'Достижения',
    body: 'Достижения'
  },
  {
    name: 'Twitch Drops ',
    body: 'Twitch Drops '
  },
  {
    name: 'Предметы',
    body: 'Предметы'
  },
  {
    name: 'Аккаунты',
    body: 'Аккаунты'
  }
];

function CatalogWarface() {
  const [filter, setFilter] = useState<boolean>(false);

  function openFilter() {
    setFilter(true);
  }
  function closeFilter() {
    setFilter(false);
  }

  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="catalog-warface">
          <div className="catalog-warface-head">
            <h2 className="page-heading">Каталог Warface</h2>
          </div>
          <div className="catalog-warface-subtitle">
            <p>
              В Warface на сегодняшний день насчитывается более 200 моделей огнестрельного оружия и
              130 видов снаряжения. В отличие от CS:GO, <br /> вещи здесь отличаются не только
              внешним видом (скинами), но и техническими характеристиками. Кроме того, в данном
              шутере можно изменять облик своего персонажа, используя различные наборы костюмов.{' '}
              <br /> <br />
              Подробнее ↓
            </p>
          </div>
          <div className="view-history-inner">
            <DefaultTabs tabContents={tabContents} other filter clickFilter={openFilter} />
          </div>
          <div className="d-flex justify-content-center align-items-center mt-40">
            <Pagination count={10} color="primary" className="def-pagination" />
          </div>
          <DashboardFooter />
        </div>
      </div>
      <Filter status={filter} onClose={closeFilter} />
    </MainTemplate>
  );
}

export default CatalogWarface;
