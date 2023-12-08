import React from 'react';
import MainTemplate from '../../features/main-template/main-template';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import RefSystemsHeader from './ref-systems-header';
import styled from 'styled-components';
import { RandomKey } from '../../utils/helpers';
import img1 from '../../assets/images/ref-systems/1.png';
import img2 from '../../assets/images/ref-systems/2.png';
import img3 from '../../assets/images/ref-systems/3.png';
import img4 from '../../assets/images/ref-systems/4.png';
import img5 from '../../assets/images/ref-systems/5.png';
import img6 from '../../assets/images/ref-systems/6.png';
import img7 from '../../assets/images/ref-systems/7.png';
import { Pagination } from '@mui/material';

const OurRef = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 25px;
  background-color: #ffffff;
  padding: 0 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  transition: 0.3s;
  transform: scale(1);
  &:hover {
    transform: scale(1.01);
  }
  & .number {
    font-size: 16px;
    color: #8f97ac;
    font-weight: 300;
    margin-right: 24px;
  }

  & img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
  }
  & .name {
    font-size: 18px;
    color: #2763fe;
    font-weight: bold;
    margin-bottom: 0;
    margin-left: 24px;
  }

  & .ourPrice {
    font-size: 16px;
    color: #babcc7;
    margin-right: 20px;
    span {
      font-size: 16px;
      color: #93d43f;
      font-weight: bold;
    }
  }
  & .allPrice {
    font-size: 16px;
    color: #babcc7;
    margin-right: 20px;
    span {
      font-size: 16px;
      color: #000;
      font-weight: bold;
    }
  }

  & .time {
    font-size: 16px;
    color: #babcc7;
    font-weight: 300;
    text-align: right;
  }
`;

const image = [img1, img2, img3, img4, img5, img6, img7];

function RefSystems() {
  return (
    <MainTemplate className="dashboard">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="finance">
          <div className="finance-head mb-4">
            <h2 className="page-heading">Реферальная система</h2>
          </div>

          <RefSystemsHeader />
          <h2 className="page-heading mb-5">Ваши рефералы</h2>

          {image.map((i, index) => (
            <OurRef key={RandomKey()}>
              <div className="d-flex justify-content-start align-items-center">
                <div className="number">№2289</div>
                <img src={i} alt="image" />
                <p className="name">YankeeNut</p>
              </div>
              <div className="d-flex justify-content-end align-items-center">
                <div className="ourPrice">
                  Ваш доход: <span>100 DG</span>
                </div>
                <div className="allPrice">
                  Потрачено: <span>10 000 ₽</span>
                </div>
                <div className="time">15.02.2023, 16:30</div>
              </div>
            </OurRef>
          ))}
          <div className="d-flex justify-content-center align-items-center mt-40">
            <Pagination count={10} color="primary" className="def-pagination" />
          </div>
          <DashboardFooter />
        </div>
      </div>
    </MainTemplate>
  );
}

export default RefSystems;
