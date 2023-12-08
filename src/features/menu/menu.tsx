import React, { useEffect, useState } from 'react';
import './menu.scss';
import logo from '../../assets/icons/logo.svg';
import DealkGo from '../../assets/icons/DealkGo.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { SITE_URL } from '../../utils/const';
import Icons from '../icons/icons';
import { RandomKey } from '../../utils/helpers';
import { Tooltip } from '@mui/material';
import vk from '../../assets/icons/VK.png';
import fb from '../../assets/icons/FB.png';
import tw from '../../assets/icons/TW.png';
import ok from '../../assets/icons/OK.png';
import yt from '../../assets/icons/YT.png';
import ig from '../../assets/icons/IG.png';

const menuItems = [
  {
    name: 'Главная',
    icon: 'home',
    url: SITE_URL.HOME
  },
  {
    name: 'Топ юзеров',
    icon: 'top_user',
    url: SITE_URL.TOP_USERS
  },
  {
    name: 'Отзывы',
    icon: 'comments_ico',
    url: SITE_URL.REVIEWS
  },
  {
    name: 'Гарантии',
    icon: 'secure_ico',
    url: SITE_URL.GUARANTEES
  },
  {
    name: 'Случайный предмет',
    icon: 'change',
    url: SITE_URL.RANDOM_ITEM
  },
  {
    name: 'Форум',
    icon: 'forum',
    url: SITE_URL.FAQ
  }
];

const menuItemsSelected = [
  {
    name: 'Продать товар',
    icon: 'basket',
    note: 0,
    url: SITE_URL.FAQ
  },
  {
    name: 'Закладки',
    icon: 'heart',
    note: 15,
    url: SITE_URL.BOOKMARKS
  },
  {
    name: 'История просмотра',
    icon: 'eye',
    note: 0,
    url: SITE_URL.VIEW_HISTORY
  },
  {
    name: 'Покупки и продажи',
    icon: 'note',
    note: 0,
    url: SITE_URL.PURCHASES_SALES
  }
];

const infoBlock = ['Пользовательское соглашение', 'Контакты', 'Частые вопросы'];

function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  const [menu, setMenu] = useState<boolean>(false);

  useEffect(() => {
    if (menu) {
      document.body.classList.add('menu-opened');
    } else {
      document.body.classList.remove('menu-opened');
    }
  }, [menu]);

  return (
    <div
      className="menu-site"
      style={{
        minWidth: menu ? 350 : 78,
        width: menu ? 350 : 78,
        padding: menu ? '25px 29px' : '25px 10px'
      }}>
      <div
        className="menu-site-logo"
        style={{
          justifyContent: menu ? 'space-between' : 'center'
        }}>
        <Link to={SITE_URL.HOME} className="d-flex justify-content-start align-items-center">
          {menu && (
            <>
              <img src={logo} alt="logo site" className="me-3 trans" width={53} />
              <img src={DealkGo} alt="logo site" />
            </>
          )}
        </Link>
        <div className={`mobile-menu-board ${menu && 'active'}`} onClick={() => setMenu(!menu)}>
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="menu-site-list">
        {menuItems.map((menuItem) => (
          <Link key={RandomKey()} to={menuItem.url}>
            <Tooltip title={menu ? '' : menuItem.name} placement="right">
              <div
                className={`menu-site-list-item ${
                  menuItem.url.includes(location.pathname) ? 'active' : ''
                }`}>
                <Icons name={menuItem.icon} width={16} height={16} />
                {menu && menuItem.name}
              </div>
            </Tooltip>
          </Link>
        ))}

        <div
          className="menu-site-selected"
          style={{
            padding: menu ? '23px' : '23px 10px'
          }}>
          {menuItemsSelected.map((item) => (
            <Tooltip key={RandomKey()} title={menu ? '' : item.name} placement="right">
              <div
                className={`menu-site-selected-item ${!menu ? 'closed' : ''}`}
                onClick={() => navigate(item.url)}>
                <div>
                  <Icons name={item.icon} width={16} height={16} />
                  {menu && item.name}
                </div>
                {item.note > 0 && (
                  <span className={`menu-site-selected-item-note ${!menu ? 'closet' : ''}`}>
                    {item.note}
                  </span>
                )}
              </div>
            </Tooltip>
          ))}
        </div>

        {menu ? (
          <>
            <div className="menu-site-info">
              <p className="menu-site-info-title">Информация</p>
              {infoBlock.map((item) => (
                <Link key={RandomKey()} to="#" className="menu-site-info-item">
                  {item}
                </Link>
              ))}
            </div>

            <h5 className="menu-site-siteName">DealkGo.com, 2023.</h5>

            <div className="d-flex justify-content-start align-items-center mt-4 mb-3">
              <Link to="#">
                <img src={vk} alt="soc icon" className="me-2" />
              </Link>
              <Link to="#">
                <img src={fb} alt="soc icon" className="me-2" />
              </Link>
              <Link to="#">
                <img src={tw} alt="soc icon" className="me-2" />
              </Link>
              <Link to="#">
                <img src={ok} alt="soc icon" className="me-2" />
              </Link>
              <Link to="#">
                <img src={yt} alt="soc icon" className="me-2" />
              </Link>
              <Link to="#">
                <img src={ig} alt="soc icon" />
              </Link>
            </div>
          </>
        ) : (
          <div className="d-flex justify-content-start align-items-center mt-4 mb-3 flex-column">
            <Link to="#">
              <img src={vk} alt="soc icon" className="mb-2" />
            </Link>
            <Link to="#">
              <img src={fb} alt="soc icon" className="mb-2" />
            </Link>
            <Link to="#">
              <img src={tw} alt="soc icon" className="mb-2" />
            </Link>
            <Link to="#">
              <img src={ok} alt="soc icon" className="mb-2" />
            </Link>
            <Link to="#">
              <img src={yt} alt="soc icon" className="mb-2" />
            </Link>
            <Link to="#">
              <img src={ig} alt="soc icon" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
