import React from 'react';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import MainTemplate from '../../features/main-template/main-template';
import MessageSupport from './components/message-support';
import vkRounded from '../../assets/images/vk-rounded.png';
import At from '../../assets/images/At.png';
import time from '../../assets/images/time.png';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 25px;
  background-color: #ffffff;
  padding: 31px;
`;

function Support() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="dashboard-home-body">
          <h2 className="page-heading">Чат с заказчиком</h2>
          <div className="row">
            <div className="col-3">
              <Wrapper>
                <p className="fs-20 c-black fw-bold mb-31">Контактная информация</p>
                <div className="d-flex justify-content-start align-items-start mb-3">
                  <img src={vkRounded} alt="vkRounded" className="mr-30" />
                  <div>
                    <p className="fs-16 c-black fw-bold mb-0">ВКонтакте</p>
                    <p className="fs-16 c-grey mb-0">Сообщество</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-start mb-3">
                  <img src={At} alt="At" className="mr-30" />
                  <div>
                    <p className="fs-16 c-black fw-bold mb-0">info@dealkgo.com</p>
                    <p className="fs-16 c-grey mb-0">Почта</p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-start">
                  <img src={time} alt="time" className="mr-30" />
                  <div>
                    <p className="fs-16 c-black fw-bold mb-0">с 10:30 до 22:30</p>
                    <p className="fs-16 c-grey mb-0">Время работы</p>
                  </div>
                </div>
              </Wrapper>
            </div>
            <div className="col-9">
              <MessageSupport />
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default Support;
