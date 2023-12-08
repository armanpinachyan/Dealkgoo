import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Icons from '../../features/icons/icons';
import DefButton from '../../features/def-button/def-button';
import styled from 'styled-components';
import { setAlertError } from '../../utils/helpers';
import { AlertSiteTypes } from '../../enums/enums';

const RefWrapper = styled.div`
  height: 335px;
  width: 100%;
  border-radius: 25px;
  filter: drop-shadow(0px 5px 12.5px rgba(184, 193, 218, 0.3));
  background-color: #ffffff;
  padding: 31px;
`;

const InputCopyText = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 15px;
  background-color: #fcfcfd;
  border: 1px solid #e6e6ed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #8f97ac;
  font-weight: 300;
  padding-left: 18px;
  padding-right: 16px;
`;

const RefItem = styled.div<{
  percentColor: string;
}>`
  width: 100%;
  height: 50px;
  border-radius: 25px;
  background-color: #f7f8fb;
  padding: 5px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 9px;
  & .percent {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: ${({ percentColor }) => percentColor};
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
  }
  .count {
    font-size: 16px;
    color: #212121;
    font-weight: 500;
  }
`;

const RefText = styled.p`
  font-size: 16px;
  color: #8f97ac;
  font-weight: 300;
  overflow: hidden;
`;

function RefSystemsHeader() {
  function copyText() {
    setAlertError(AlertSiteTypes.success, 'Текст успешно скопирован');
  }

  return (
    <div className="row">
      <div className="col-lg-4 col-md-6 col-12 mb-3">
        <RefWrapper>
          <p className="fs-18 c-black fw-bold">SheenWest</p>
          <div className="row">
            <div className="col-5">
              <p className="fs-18 c-black">
                <b>1 520</b>
                <br />
                <span className="c-grey">Приглашенных</span>
              </p>
            </div>
            <div className="col-5">
              <p className="fs-18 c-black">
                <b>126 408 DG</b>
                <br />
                <span className="c-grey">Заработанно</span>
              </p>
            </div>
          </div>
          <p className="fs-12 c-black">Реферальная ссылка</p>

          <InputCopyText>
            https://dealkgo.com/ref/38921
            <CopyToClipboard text="https://dealkgo.com/ref/38921" onCopy={copyText}>
              <Icons name="duplicate" width={14} color="#2763fe" className="cursor-pointer" />
            </CopyToClipboard>
          </InputCopyText>

          <div
            style={{
              marginTop: 30
            }}>
            <DefButton
              bg="#2763fe"
              text={
                <>
                  <Icons name="vk" width={16} className="icon-white me-2" />
                  Поделиться
                </>
              }
              className="w-100"
            />
          </div>
        </RefWrapper>
      </div>
      <div className="col-lg-4 col-md-6 col-12 mb-3">
        <RefWrapper>
          <p className="fs-18 c-black fw-bold">Ваш постоянный доход</p>

          <RefItem percentColor="#2763ff">
            <div className="percent">1%</div>
            <div className="count">1 — 4 999 ₽</div>
          </RefItem>
          <RefItem percentColor="#feb348">
            <div className="percent">3%</div>
            <div className="count">5 000 — 1 4999 ₽</div>
          </RefItem>
          <RefItem percentColor="#5f3ebc">
            <div className="percent">5%</div>
            <div className="count">15 000 — 24 999 ₽</div>
          </RefItem>
          <RefItem percentColor="#93d43f">
            <div className="percent">7%</div>
            <div className="count">25 000 — ∞</div>
          </RefItem>
        </RefWrapper>
      </div>
      <div className="col-lg-4 col-md-6 col-12 mb-3">
        <RefWrapper>
          <p className="fs-18 c-black fw-bold">Реферальная система</p>

          <RefText>
            Зарабатывай с каждой покупки своего реферала от 1 до 7% . Например, если ваш реферал
            совершил покупку на 1 000 ₽, то вы получите 1% с его покупки, это 10 DG*.
            <br />
            <br />
            Бонусами DG можно оплачивать покупки до 100%. Оплаченные покупки реферала бонусами DG не
            учитываются.
          </RefText>
        </RefWrapper>
      </div>
    </div>
  );
}

export default RefSystemsHeader;
