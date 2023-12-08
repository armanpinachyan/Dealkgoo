import React from 'react';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import MainTemplate from '../../features/main-template/main-template';
import './top-users.scss';
import avatar1 from '../../assets/images/avatar.png';
import avatar2 from '../../assets/images/2-avatar.png';
import avatar3 from '../../assets/images/3-avatar.png';
import top1 from '../../assets/images/top-1.png';
import { RandomKey } from '../../utils/helpers';
import { Pagination } from '@mui/material';

const items = [
  'DungeonPacket',
  'DrizzleChandler',
  'ChilledLefty',
  'TabbyArbor',
  'SecretiveGravy',
  'SportyBirch',
  'ExaltCellphone'
];

function TopUsers() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="draw">
          <h2 className="page-heading">Топ пользователей</h2>
        </div>

        <div className="top-users">
          <div className="top-users-gift">
            <div className="top-users-gift-left">
              <h2 className="top-users-gift-left-title">Успей занять призовые места!</h2>
              <p className="top-users-gift-left-subtitle">Статистика обновляется каждые 30 дней</p>
            </div>
            <div className="top-users-gift-right">
              <div className="top-users-prize-fund">
                <h2 className="top-users-prize-fund-title">16 000 ₽</h2>
                <p className="top-users-prize-fund-subtitle">Призовой фонд</p>
              </div>
              <div className="top-users-date">
                <div className="top-users-date-item">
                  <h2 className="top-users-date-item-title">29</h2>
                  <p className="top-users-date-item-subtitle">Дней</p>
                </div>
                <div className="top-users-date-item">
                  <h2 className="top-users-date-item-title">23</h2>
                  <p className="top-users-date-item-subtitle">Часа</p>
                </div>
                <div className="top-users-date-item">
                  <h2 className="top-users-date-item-title">30</h2>
                  <p className="top-users-date-item-subtitle">Мин</p>
                </div>
                <div className="top-users-date-item">
                  <h2 className="top-users-date-item-title">16</h2>
                  <p className="top-users-date-item-subtitle">Сек</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row gap-">
            <div className="col-lg-4 col-sm-6 col-12 mb-lg-0 mb-3">
              <div className="top-users-item-col">
                <div className="top-users-item-col-delight">
                  <h3 className="top-users-item-col-delight-title">UnionDelight</h3>
                  <p className="top-users-item-col-delight-subtitle">1 место</p>
                </div>
                <div
                  className="top-users-item-col-image"
                  style={{
                    backgroundImage: `url(${avatar1})`
                  }}>
                  <div className="top-users-item-col-image-money">10 000 ₽</div>
                </div>
                <div className="top-users-item-col-earned">
                  <div className="top-users-item-col-earned-money">
                    <h3 className="top-users-item-col-earned-money-title">34 219 ₽</h3>
                    <p className="top-users-item-col-earned-money-subtitle">Купленные товары</p>
                  </div>
                  <div className="top-users-item-col-earned-money">
                    <h3 className="top-users-item-col-earned-money-title">118 523 ₽</h3>
                    <p className="top-users-item-col-earned-money-subtitle">Заработанно</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 mb-lg-0 mb-3">
              <div className="top-users-item-col">
                <div className="top-users-item-col-delight">
                  <h3 className="top-users-item-col-delight-title">VigorSock</h3>
                  <p className="top-users-item-col-delight-subtitle">2 место</p>
                </div>
                <div
                  className="top-users-item-col-image blue-item"
                  style={{
                    backgroundImage: `url(${avatar2})`
                  }}>
                  <div className="top-users-item-col-image-money blue-money">5 000 ₽</div>
                </div>
                <div className="top-users-item-col-earned">
                  <div className="top-users-item-col-earned-money">
                    <h3 className="top-users-item-col-earned-money-title">22 899 ₽</h3>
                    <p className="top-users-item-col-earned-money-subtitle">Купленные товары</p>
                  </div>
                  <div className="top-users-item-col-earned-money">
                    <h3 className="top-users-item-col-earned-money-title">80 460 ₽</h3>
                    <p className="top-users-item-col-earned-money-subtitle">Заработанно</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 mb-lg-0 mb-3">
              <div className="top-users-item-col">
                <div className="top-users-item-col-delight">
                  <h3 className="top-users-item-col-delight-title">EntireKilling</h3>
                  <p className="top-users-item-col-delight-subtitle">3 место</p>
                </div>
                <div
                  className="top-users-item-col-image red-image"
                  style={{
                    backgroundImage: `url(${avatar3})`
                  }}>
                  <div className="top-users-item-col-image-money red-money">1 000 ₽</div>
                </div>
                <div className="top-users-item-col-earned">
                  <div className="top-users-item-col-earned-money">
                    <h3 className="top-users-item-col-earned-money-title">26 030 ₽</h3>
                    <p className="top-users-item-col-earned-money-subtitle">Купленные товары</p>
                  </div>
                  <div className="top-users-item-col-earned-money">
                    <h3 className="top-users-item-col-earned-money-title">52 902 ₽</h3>
                    <p className="top-users-item-col-earned-money-subtitle">Заработанно</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="top-users-top10">
            <div className="top-users-top10-title mt-39 mb-39">Топ 10</div>
            {items.map((item) => (
              <div key={RandomKey()} className="top-users-top10-item">
                <div className="top-users-top10-item-name">
                  <div className="top-users-top10-item-name-img">
                    <p className="top-users-top10-item-name-img-nomer">№4</p>
                    <img src={top1} alt="" />
                    <p className="top-users-top10-item-name-img-title">{item}</p>
                  </div>
                </div>
                <div className="top-users-item-col-earned money-item-earned">
                  <div className="top-users-item-col-earned-money">
                    <h3 className="top-users-item-col-earned-money-title">34 219 ₽ </h3>
                    <p className="top-users-item-col-earned-money-subtitle">Купленные товары</p>
                  </div>
                  <div className="top-users-item-col-earned-money">
                    <h3 className="top-users-item-col-earned-money-title">118 523 ₽</h3>
                    <p className="top-users-item-col-earned-money-subtitle">Заработанно</p>
                  </div>
                </div>
              </div>
            ))}
            <div className="top-users-top10-title mt-39 mb-39">Ваше место</div>
            <div key={RandomKey()} className="top-users-top10-item">
              <div className="top-users-top10-item-name">
                <div className="top-users-top10-item-name-img">
                  <p className="top-users-top10-item-name-img-nomer">№4</p>
                  <img src={top1} alt="" />
                  <p className="top-users-top10-item-name-img-title">AssassinErt</p>
                </div>
              </div>
              <div className="top-users-item-col-earned money-item-earned">
                <div className="top-users-item-col-earned-money">
                  <h3 className="top-users-item-col-earned-money-title">34 219 ₽ </h3>
                  <p className="top-users-item-col-earned-money-subtitle">Купленные товары</p>
                </div>
                <div className="top-users-item-col-earned-money">
                  <h3 className="top-users-item-col-earned-money-title">118 523 ₽</h3>
                  <p className="top-users-item-col-earned-money-subtitle">Заработанно</p>
                </div>
              </div>
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

export default TopUsers;
