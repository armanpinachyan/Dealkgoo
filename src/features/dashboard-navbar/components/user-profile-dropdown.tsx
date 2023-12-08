import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import user_about from '../../../assets/icons/user-about.svg';
import { RandomKey } from '../../../utils/helpers';
import Icons from '../../icons/icons';
import { SITE_URL } from '../../../utils/const';
import { Link } from 'react-router-dom';

const profileMenu = [
  {
    name: 'Мой профиль',
    icon: 'user',
    url: SITE_URL.PROFILE
  },
  {
    name: 'Мои товары',
    icon: 'boxes',
    url: SITE_URL.MY_PRODUCTS
  },
  {
    name: 'Стол заказов',
    icon: 'stol-zak',
    url: SITE_URL.ORDER_TABLE
  },
  {
    name: 'Достижения',
    icon: 'awards',
    url: SITE_URL.ACHIEVEMENTS
  },
  {
    name: 'Настройки',
    icon: 'settings',
    url: SITE_URL.PROFILE_SETTINGS
  },
  {
    name: 'Пополение и вывод',
    icon: 'wallet',
    url: SITE_URL.PROFILE_SETTINGS
  },
  {
    name: 'Реф. система',
    icon: 'share',
    url: SITE_URL.REF_SYSTEMS
  }
];

function UserProfileDropdown() {
  const [dropDownOpenClose, setDropDownOpenClose] = useState<boolean>(false);
  function handleChange() {
    setDropDownOpenClose(!dropDownOpenClose);
  }

  return (
    <Dropdown className="header-dropdown ms-3">
      <Dropdown.Toggle variant="outline-light" className="border-0">
        <div className="user-about" onClick={handleChange}>
          <div className="icon">
            <img src={user_about} width="100%" height="100%" alt="about" />
          </div>
          <div className="texts">
            <div className="name">Alexander</div>
            <span>Online</span>
          </div>
          <div className="down icon-blue">
            <div
              className="trans flex-c-c"
              style={{
                width: 16,
                height: 16,
                transform: `rotate(${dropDownOpenClose ? '-180' : '0'}deg)`
              }}>
              <Icons name="arrow-down-circle" color="#2763fe" width={16} height={16} />
            </div>
          </div>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {profileMenu.map((item) => (
          <Link key={RandomKey()} to={item.url}>
            <div className="ps-1 dropdown-item">
              <Icons name={item.icon} width={16} height={16} className="me-2" />
              {item.name}
            </div>
          </Link>
        ))}
        <Dropdown.Item href="#" className="ps-1 opacity-50">
          <Icons name="sign-in" width={16} height={16} className="me-2" />
          Вийти
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default UserProfileDropdown;
