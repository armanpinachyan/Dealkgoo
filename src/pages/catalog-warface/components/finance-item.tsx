import React from 'react';
import Icons from '../../../features/icons/icons';
import game1 from '../../../assets/icons/game1.png';
import rating_icon from '../../../assets/icons/rating-icon.png';
import DefButton from '../../../features/def-button/def-button';

function FinanceItem() {
  return (
    <div className="Table-catalog-warface">
      <div className="box1">
        <div className="image">
          <div className="heart icon-pink">
            <Icons name="heart" width={16} />
          </div>
          <img src={game1} alt="game1" />
        </div>
        <div className="texts">
          <button className="news">Новинка</button>
          <h5 className="name">Аккаунт Warface за хорошие деньги</h5>
          <span className="sub-title">
            Сервер: ru.warface, Ранг: 134, Тип: Перепродажа, Донат: 333.
          </span>
        </div>
      </div>
      <div className="box2">
        <div className="rating">
          <div className="rating-icon">
            <img src={rating_icon} alt="rat" width={32} />
            <div className="star icon-yellow">
              <Icons name="star" width={16} />
              <span>4.8</span>
            </div>
          </div>
        </div>
        <DefButton
          bg="#2763fe"
          text={
            <>
              <Icons name="shopping-cart" width={16} className="icon-white me-2" />
              590 ₽
            </>
          }
        />
      </div>
    </div>
  );
}

export default FinanceItem;
