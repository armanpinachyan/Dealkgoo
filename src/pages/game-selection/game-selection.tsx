import React from 'react';
import './game-selection.scss';
import case_item1 from '../../assets/images/case-item1.png';
import case_item2 from '../../assets/images/case-item2.png';
import case_item3 from '../../assets/images/case-item3.png';
import MainTemplate from '../../features/main-template/main-template';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import CaseItem from '../../features/case-item/case-item';
import { RandomKey } from '../../utils/helpers';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import Icons from '../../features/icons/icons';
import GameSelectionItem from '../../features/game-selection-item/game-selection-item';
import img1 from '../../assets/images/game-selection/1.png';
import img2 from '../../assets/images/game-selection/2.png';
import img3 from '../../assets/images/game-selection/3.png';
import img4 from '../../assets/images/game-selection/4.png';
import img5 from '../../assets/images/game-selection/5.png';
import img6 from '../../assets/images/game-selection/6.png';
import logo1 from '../../assets/images/game-selection/logo1.png';
import logo2 from '../../assets/images/game-selection/logo2.png';
import logo3 from '../../assets/images/game-selection/logo3.png';
import logo4 from '../../assets/images/game-selection/logo4.png';
import logo5 from '../../assets/images/game-selection/logo5.png';
import logo6 from '../../assets/images/game-selection/logo6.png';
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
  }
];

const game_selection = [
  {
    bg: img1,
    logo: logo1,
    logoWidth: 60,
    title: 'WarFace',
    btn: true,
    texts: [
      'Аккаунты',
      'Пин-коды',
      'Буст РМ',
      'Спецоперации',
      'Статистика',
      'Кредиты',
      'Достижения',
      'Прочее'
    ]
  },
  {
    bg: img2,
    logo: logo2,
    logoWidth: 40,
    title: 'Dota 2',
    btn: true,
    texts: [
      'Аккаунты',
      'Привязки VHS',
      'Предметы',
      'Буст MMR',
      'Калибровка',
      'Отмыв ЛП',
      'Услуги Dota+',
      'Боевой пропуск',
      'Прочее',
      'Отмыв ЛП',
      'Обучение',
      'Услуги Dota+ копия',
      'Ещё...'
    ]
  },
  {
    bg: img3,
    logo: logo3,
    logoWidth: 60,
    btn: false,
    title: 'Counter-Strike 2',
    texts: ['Аккаунты', 'Prime', 'Скины', 'Буст', 'Обучение', 'Прочее']
  },
  {
    bg: img4,
    logo: logo4,
    logoWidth: 60,
    title: 'GTA V',
    btn: false,
    texts: ['Аккаунты', 'Деньги', 'Ключи', 'Услуги', 'Прочее']
  },
  {
    bg: img5,
    logo: logo5,
    logoWidth: 60,
    title: 'Fortnite',
    btn: false,
    texts: ['Аккаунты', 'Предметы', 'Услуги', 'B-баксы', 'Донат', 'Прочее']
  },
  {
    bg: img6,
    logo: logo6,
    logoWidth: 36,
    title: 'World of Tanks',
    btn: false,
    texts: [
      'Бонус-коды',
      'Буст',
      'Фарм серебра',
      'Обучение',
      'Выполнение ЛБЗ',
      'Золото',
      'Услуги Dota+',
      'Кланы',
      'Донат',
      'Прочее'
    ]
  }
];

function GameSelection() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="popular-cases">
          <h2 className="page-heading">Популярные кейсы</h2>
          <div className="row mt-0 pt-0">
            {casiItemarr.map((el) => (
              <CaseItem key={RandomKey()} casiItem={el} />
            ))}
          </div>
          <div className="game-selection">
            <div className="game-selection-inner">
              <div className="game-back-head">
                <button className="game-btn">
                  <Icons name="arrow-left" width={16} color="#2763ff" />
                </button>
                <h2 className="page-heading game-head">Выбор игры</h2>
              </div>
              <label>
                <input type="search" placeholder="Поиск игры" />
                <Icons className="icon-search" name="search" width={16} color="#2763ff" />
              </label>
            </div>
            <div className="game-selection-row row">
              {game_selection.map((elem) => (
                <GameSelectionItem key={RandomKey()} elem={elem} />
              ))}
            </div>
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

export default GameSelection;
