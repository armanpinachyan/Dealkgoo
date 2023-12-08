import React from 'react';
import styled from 'styled-components';
import img1 from '../../../assets/images/case/logo1.png';
import user from '../../../assets/images/user.png';
import Icons from '../../../features/icons/icons';
import DefButton from '../../../features/def-button/def-button';

const UserInfo = styled.div`
  width: 100%;
  border-radius: 25px;
  background-color: #ffffff;
  padding: 14px;
  .img-block {
    width: 100%;
    height: 200px;
    border-radius: 25px;
    background-color: #f7f8fb;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 150px;
    }
  }
`;

const Status = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  height: 30px;
  border-radius: 14px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #2763fe;
  font-weight: bold;
  padding: 0 14px;
`;

const Heard = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.2);
  }
`;

const RatingBlock = styled.div`
  width: 100px;
  height: 40px;
  border-radius: 20px;
  background-color: #f7f8fb;
  padding: 5px;
  font-size: 16px;
  color: #212121;
  font-weight: bold;
  display: flex;
  justify-content: start;
  align-items: center;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 6px;
  }
  svg {
    margin-right: 6px;
  }
`;

const Price = styled.div`
  width: 120px;
  height: 40px;
  border-radius: 20px;
  background-color: #f7f8fb;
  font-size: 16px;
  color: #212121;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Info = styled.div`
  width: 100%;
  border-radius: 25px;
  background-color: #ffffff;
  margin-top: 19px;
  padding: 31px 33px;
`;

function Costumer() {
  return (
    <div>
      <UserInfo>
        <div className="img-block">
          <Status>Новинка</Status>
          <Heard>
            <Icons name="heart" width={16} color="#ff0000" />
          </Heard>
          <img src={img1} alt="image" />
        </div>
        <div className="px-3">
          <p className="mb-0 fs-18 c-black mt-19 fw-bold">Makmilan Gr-23</p>
          <p className="mb-0 fs-16 c-grey">Оружие в идеальном состоянии, прямо из завода.</p>
          <ul className="list-unstyled mt-19">
            <li className="c-grey">
              <span className="c-black fs-16">Тип:</span> Оружие
            </li>
            <li className="c-grey">
              <span className="c-black fs-16">Кол-во:</span> 33
            </li>
            <li className="c-grey">
              <span className="c-black fs-16">Продажа от:</span> 33 шт
            </li>
            <li className="c-grey">
              <span className="c-black fs-16">Срок:</span> Навсегда
            </li>
          </ul>
          <div className="d-flex justify-content-between align-items-center">
            <RatingBlock>
              <img src={user} alt="user image" />
              <Icons name="star" width={16} color="#ffba00" />
              4.8
            </RatingBlock>
            <Price>
              <Icons name="shopping-cart-add" width={16} className="me-1" />
              590 ₽
            </Price>
          </div>

          <DefButton
            bg="#93d43f"
            text="Предложить"
            filter="drop-shadow(0px 5px 12.5px rgba(147,212,63,0.3))"
            className="mt-19 w-100"
          />
          <p className="mb-0 mt-19 text-center fs-14 c-grey">
            После оплаты товара сумма спишется с вашего баланса
          </p>
        </div>
      </UserInfo>
      <Info>
        <p className="mb-0 fw-bold fs-20 mb-29">Информация для сделки</p>
        <div className="c-grey fs-16 mt-29">
          <span className="c-yellow fs-18 fw-bold d-block">01.</span>
          Исполнитель начинает сделку, нажав на кнопку “Предложить”
        </div>
        <div className="c-grey fs-16 mt-19">
          <span className="c-yellow fs-18 fw-bold d-block">02.</span>
          Заказчик нажимает “Оплатить”
        </div>
        <div className="c-grey fs-16 mt-19">
          <span className="c-yellow fs-18 fw-bold d-block">03.</span>
          После проверки товара покупатель завершает сделку.
        </div>
      </Info>
    </div>
  );
}

export default Costumer;
