import React from 'react';
import './rating-warface-table-item.scss';
import cat from '../../../assets/images/cat-avatar.png';
import Icons from '../../../features/icons/icons';
import DefButton from '../../../features/def-button/def-button';

function RatingWarfaceTableItem() {
  return (
    <div className="RatingWarfaceTableItem">
      <div className="box1">
        <div className="text">
          <span>Ранг</span>
          <div>25</div>
        </div>
        <div className="text">
          <span>Сервер</span>
          <div>ru.warface.com</div>
        </div>
        <div className="text">
          <span>Кол-во доната</span>
          <div>185</div>
        </div>
        <div className="text">
          <span>Тип аккаунта</span>
          <div>Личный</div>
        </div>
        <div className="text">
          <span>Отправка</span>
          <div>Моментально</div>
        </div>
      </div>
      <div className="box2">
        <div className="user-bloc">
          <div className="image d-flex align-items-center">
            <div className="icon ">
              <img src={cat} alt="cat" />
            </div>
            <div className="ms-2">
              <div className="icon-name">ScopeDogma</div>
              <span className="icon-online">Online </span>
            </div>
          </div>
          <div className="rating d-flex align-items-center">
            <div className="rating-number">4.8</div>
            <div className="ms-2">
              <div className="stars">
                <Icons name="star" width={16} className="me-2" color="#ffba00" />
                <Icons name="star" width={16} className="me-2" color="#ffba00" />
                <Icons name="star" width={16} className="me-2" color="#ffba00" />
                <Icons name="star" width={16} className="me-2" color="#ffba00" />
                <Icons name="star" width={16} color="#ffba00" />
              </div>
              <div>
                <span className="fs-16 c-black">52 оценок • </span>
                <span className=" fs-16 c-blue">16 отзывов</span>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons d-flex">
          <DefButton
            text={
              <>
                <Icons className="me-2" name="shopping-cart-add" width={16} color="#fff" />
                590 ₽
              </>
            }
            bg="#2763fe"
          />
          <button className="chat">
            <Icons name="chat" width={16} color="#fff" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RatingWarfaceTableItem;
