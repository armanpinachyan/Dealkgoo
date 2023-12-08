import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Badge } from '@mui/material';
import Icons from '../../icons/icons';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { SITE_URL } from '../../../utils/const';

const YellowBlock = styled.div`
  width: 40px;
  min-width: 40px;
  height: 56px;
  border-radius: 20px;
  background-color: #feb348;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;

  & svg {
    fill: #fff;
  }
`;

const OpenAll = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 15px;
  background-color: #f7f8fb;
  text-align: center;
  font-size: 16px;
  color: #2763fe;
  margin-top: 20px;
`;

function Push() {
  return (
    <Dropdown className="header-dropdown push">
      <Dropdown.Toggle variant="outline-light" className="border-0">
        <div className="icon icon-pink border-0">
          <Badge color="secondary" badgeContent={0}>
            <Icons name="notifications" width={20} height={20} />
          </Badge>
        </div>
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div className="d-flex justify-content-start align-items-center">
            <span className="fs-18 c-black fw-bold me-2">Уведомления</span>
            <span className="push-count">16</span>
          </div>
          <Icons name="delete" width={14} className="opacity-50 cursor-pointer" />
        </div>

        <div className="d-flex justify-content-start align-items-start">
          <YellowBlock>
            <Icons name="stol-zak" width={16} />
          </YellowBlock>
          <div>
            <div className="d-flex justify-content-between">
              <div className="fs-16 c-black fw-bolder">Стол заказа</div>
              <span className="fs-14 c-grey">10:45</span>
            </div>
            <p className="fs-14 c-grey">Товар по вашему запросу был выставлен на продажу!</p>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-start">
          <YellowBlock>
            <Icons name="awards" width={16} />
          </YellowBlock>
          <div>
            <div className="d-flex justify-content-between">
              <div className="fs-16 c-black fw-bolder">Достижения</div>
              <span className="fs-14 c-grey">06:30</span>
            </div>
            <p className="fs-14 c-grey">Вы получили новое достижение за покупки на сайте</p>
          </div>
        </div>
        <div className="d-flex justify-content-start align-items-start">
          <YellowBlock>
            <Icons name="wallet" width={16} />
          </YellowBlock>
          <div>
            <div className="d-flex justify-content-between">
              <div className="fs-16 c-black fw-bolder">Пополение</div>
              <span className="fs-14 c-grey">19:02</span>
            </div>
            <p className="fs-14 c-grey">На ваш баланс поступил платеж в размере 2 490 ₽</p>
          </div>
        </div>
        <Link to={SITE_URL.NOTIFICATION}>
          <OpenAll>Все уведомления →</OpenAll>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Push;
