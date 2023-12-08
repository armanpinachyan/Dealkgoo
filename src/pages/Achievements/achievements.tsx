import React from 'react';
import './achievements.scss';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import MainTemplate from '../../features/main-template/main-template';
import many from '../../assets/icons/save-money.png';
import vk from '../../assets/icons/vk2.png';
import speech from '../../assets/icons/speech-bubble.png';
import target from '../../assets/icons/target.png';
import cake from '../../assets/icons/cake.png';
import roulete from '../../assets/icons/roulette.png';
import vip from '../../assets/icons/vip.png';
import gift2 from '../../assets/icons/gift-box.png';
import mouse from '../../assets/icons/web-browser.png';
import like from '../../assets/icons/like.png';

import AchievementsItem from './componets/achievements-item';
import { RandomKey } from '../../utils/helpers';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';

const url = [
  {
    img: vk,
    width: 46,
    height: 64,
    name: 'VK подписка',
    title: 'Подписаться на группу',
    disabled: 0
  },
  {
    img: many,
    width: 64,
    height: 58,
    name: 'Продавец',
    title: 'Заработать 10 000 ₽',
    disabled: 0
  },
  {
    img: like,
    width: 64,
    height: 60,
    name: 'Рейтинг',
    title: 'Высокая оценка покупалетей',
    disabled: 0
  },
  {
    img: speech,
    width: 64,
    height: 64,
    name: 'Общение',
    title: 'Участие в онлайн-чатах',
    disabled: 0
  },
  {
    img: target,
    width: 64,
    height: 56,
    name: 'Партнер',
    title: 'Пригласить 100 друзей',
    disabled: 0
  },
  {
    img: cake,
    width: 64,
    height: 64,
    name: 'День рождение',
    title: 'Подписаться на группу',
    disabled: 0
  },
  {
    img: roulete,
    width: 50,
    height: 64,
    name: 'Везунчик',
    title: 'Выиграть дорогой кейс',
    disabled: 0
  },
  {
    img: vip,
    width: 64,
    height: 60,
    name: 'Топ юзер',
    title: 'Лучшие пользователи сайта',
    disabled: 0
  },
  {
    img: gift2,
    width: 64,
    height: 64,
    name: 'Бонус',
    title: 'Получить бонус от DG',
    disabled: 20
  },
  {
    img: mouse,
    width: 64,
    height: 40,
    name: 'Постоянный',
    title: 'Быть на сайте каждый день',
    disabled: 60
  }
];

function Achievements() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="achievements">
          <h2 className="page-heading">Мои достижения</h2>
          <div className="dashboard-home-body-scroll">
            <div className="row achievements-row">
              {url.map((elem) => (
                <AchievementsItem key={RandomKey()} elem={elem} />
              ))}
            </div>
            <DashboardFooter />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default Achievements;
