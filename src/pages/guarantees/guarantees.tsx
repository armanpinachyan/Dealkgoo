import React from 'react';
import MainTemplate from '../../features/main-template/main-template';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import Icons from '../../features/icons/icons';
import styled from 'styled-components';
import { RandomKey } from '../../utils/helpers';

const GuaranteesItemDiv = styled.div`
  height: 250px;
  border-radius: 25px;
  filter: drop-shadow(0px 5px 12.5px rgba(184, 193, 218, 0.3));
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .GuaranteesItem-title {
    font-size: 20px;
    color: #212121;
    font-weight: bold;
    margin-top: 30px;
    @media (max-width: 576px) {
      font-size: 18px;
    }
  }
  .GuaranteesItem-subtitle {
    font-size: 16px;
    color: #babcc7;
    font-weight: 300;
    text-align: center;
    width: 100%;
    max-width: 304px;
    margin-top: 28px;
    @media (max-width: 576px) {
      font-size: 14px;
      margin-top: 20px;
    }
  }
`;

const GuaranteesLevel = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 25px;
  background-color: #ffffff;
  margin-bottom: 19px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 31px;
  @media (max-width: 576px) {
    padding-left: 15px;
  }
  svg {
    margin-right: 30px;
    @media (max-width: 576px) {
      margin-right: 20px;
    }
  }
`;

const GuaranteesLevelItems = [
  {
    icon: 'stol-zak',
    title: 'Множество поставщиков',
    text: 'Сотрудничество с поставщиками увеличивает наш ассортимент и поддерживает рубрику “Случайный аккаунт”'
  },
  {
    icon: 'headphones',
    title: 'Техническая поддержка',
    text: 'У нас работает квалифицированная техническая поддержка, которая оперативно ответит на все ваши вопросы.'
  },
  {
    icon: 'deal',
    title: 'Безопасная сделка',
    text: 'При возникновений проблем и спорных ситуаций всегда принимается справедливое решение. Мы несем ответсвенность за безопасность вашей сделки.'
  },
  {
    icon: 'wallet',
    title: 'Многообразие оплаты',
    text: 'Мы поддерживаем множество способов оплаты, в том числе и зарубежные переводы.'
  }
];

function Guarantees() {
  return (
    <MainTemplate className="dashboard">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="finance">
          <div className="finance-head mb-4">
            <h2 className="page-heading">Гарантии</h2>
          </div>

          <div className="row">
            <div className="col-lg-4 col-sm-6 col-12 mb-3">
              <GuaranteesItemDiv>
                <Icons name="flash" color="#5f3ebc" width={44} />
                <div className="GuaranteesItem-title">Моментально</div>
                <div className="GuaranteesItem-subtitle">
                  Вы получите свой товар моментально, сразу после успешной оплаты.
                </div>
              </GuaranteesItemDiv>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 mb-3">
              <GuaranteesItemDiv>
                <Icons name="secure" color="#93d43f" width={54} />
                <div className="GuaranteesItem-title">Безопасно</div>
                <div className="GuaranteesItem-subtitle">
                  Полученные нами данные о вас остаются конфиденциальны.
                </div>
              </GuaranteesItemDiv>
            </div>
            <div className="col-lg-4 col-sm-6 col-12 mb-3">
              <GuaranteesItemDiv>
                <Icons name="quality" color="#feb348" width={64} />
                <div className="GuaranteesItem-title">Качественно</div>
                <div className="GuaranteesItem-subtitle">
                  Мы предлагаем качественный и удобный сервис для вас
                </div>
              </GuaranteesItemDiv>
            </div>
          </div>

          <h2 className="page-heading mt-5 mb-4">Все ещё не уверены?</h2>

          {GuaranteesLevelItems.map((item) => (
            <GuaranteesLevel key={RandomKey()}>
              <Icons name={item.icon} width={32} color="#2763ff" />
              <div>
                <p className="fs-sm-18 fs-14 c-black fw-bold mb-0">{item.title}</p>
                <p className="fs-sm-16 fs-12 c-grey mb-0">{item.text}</p>
              </div>
            </GuaranteesLevel>
          ))}

          <DashboardFooter />
        </div>
      </div>
    </MainTemplate>
  );
}

export default Guarantees;
