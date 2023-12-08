import React from 'react';
import Icons from '../../../features/icons/icons';
import img1 from '../../../assets/images/case/logo1.png';
import user from '../../../assets/images/user.png';
import user2 from '../../../assets/images/user2.png';
import DefButton from '../../../features/def-button/def-button';
import styled from 'styled-components';

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
  padding: 25px;
`;

const ChangeDeleteView = styled.div`
  width: calc(100% + 50px);
  height: 30px;
  background-color: #f8f9fc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  left: -25px;
  margin: 22px 0;
  padding-left: 25px;
  padding-right: 25px;
`;

function Seller() {
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
        <div className="d-flex justify-content-between align-items-center border-bottom pb-3 border-light">
          <div className="d-flex justify-content-start align-items-center">
            <img
              src={user}
              alt="user image"
              className="mr-20 rounded-circle object-fit-cover"
              width={40}
              height={40}
            />
            <div>
              <p className="mb-0 fs-18 c-black fw-bold">BubMotion</p>
              <p className="mb-0 fs-14 c-grey">08.05.2023</p>
            </div>
          </div>
          <div className="d-flex justify-content-end align-items-center fs-16 c-black fw-bold">
            <Icons name="star" width={16} color="#ffba00" className="me-2" />
            5.0
          </div>
        </div>
        <p className="fs-16 c-grey mt-23 fw-light">
          Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр
          для всех платформ, включая последние релизы. Цены были весьма конкурентными, а персонал
          оказался очень дружелюбным и помог мне выбрать игру, которая мне подходит.
        </p>
        <ChangeDeleteView>
          <div className="d-flex justify-content-start align-items-center">
            <div className="fs-16 c-black d-flex justify-content-start align-items-center mr-20">
              <Icons name="edit" width={16} color="#2763fe" className="me-2" />
              Редактировать
            </div>
            <span className="fs-16 c-red">Удалить</span>
          </div>
          <Icons name="eye-hide" width={16} color="#d6d9ef" className="cursor-pointer" />
        </ChangeDeleteView>
        <div className="d-flex justify-content-start align-items-start">
          <img
            src={user2}
            alt="user image"
            className="mr-18 rounded-circle object-fit-cover"
            width={40}
            height={40}
          />
          <div>
            <p className="mb-0 fs-18 c-black fw-bold">SofaHopper</p>
            <p className="mb-0 fs-14 c-grey">05.05.2023</p>
            <p className="fs-16 c-grey mt-18 fw-light">
              Благодарим за высокую оценку нашим стараниям! Спасибо за то, что находите время для
              хороших отзывов, они помогают людям выбрать правильный товар.
            </p>
          </div>
        </div>
      </Info>
    </div>
  );
}

export default Seller;
