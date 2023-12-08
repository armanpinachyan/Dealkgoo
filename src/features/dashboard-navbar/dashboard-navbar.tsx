import React, { useEffect, useRef, useState } from 'react';
import './dashboard-navbar.scss';
import search_svg from '../../assets/icons/search.svg';
import box_alt from '../../assets/icons/box-alt.svg';
import { Badge } from '@mui/material';
import add from '../../assets/icons/add.svg';
import Icons from '../icons/icons';
import UserProfileDropdown from './components/user-profile-dropdown';
import Push from './components/push';

function DashboardNavbar() {
  const [fixed, setFixed] = useState(false);
  useEffect(() => {
    const body = document.querySelector('.MainTemplate-content');
    body?.addEventListener('scroll', () => setFixed(body.scrollTop > 20));
  }, []);
  return (
    <div className={`dashboard-home-header ${fixed ? 'fixed' : ''}`}>
      <div className="search-bloc">
        <div className="input-box">
          <input type="text" placeholder="Поиск по сайту..." />
          <img className="icon-search" src={search_svg} width={16} height={16} alt={'search'} />
        </div>
        <div className="user-calc">
          <div className="box1">
            <img src={box_alt} width={24} height={24} alt="boxalt" />
            <div className="texts d-none d-xxl-block">
              <div className="texts-number">181 924 36</div>
              <span>Купленно товаров</span>
            </div>
          </div>
          <div className="box2" />
          <div className="box3 icon-darkGreen">
            <Icons name="users" width={24} height={24} />
            <div className="texts d-none d-xxl-block">
              <div className="texts-number">486 532</div>
              <span>Пользователей</span>
            </div>
          </div>
        </div>
      </div>
      <div className="user-bloc">
        <div className="icons">
          <div className="icon icon-yellow">
            <Badge className={'badge-s'} color="secondary" badgeContent={2}>
              <Icons name="chat" width={20} height={20} />
            </Badge>
          </div>
          <div className="icon icon-purple">
            <Badge color="secondary" badgeContent={0}>
              <Icons name="headphones" width={20} height={20} />
            </Badge>
          </div>
          <Push />
        </div>
        <div className="user">
          <div className="price">
            <div className="icon">
              <img src={add} width={20} height={20} alt="add" />
            </div>
            <div className="texts  d-none d-xl-block">
              <div className="texts-number">120 560 ₽</div>
              <span>68 220 DG</span>
            </div>
          </div>
          <UserProfileDropdown />
        </div>
      </div>
    </div>
  );
}

export default DashboardNavbar;
