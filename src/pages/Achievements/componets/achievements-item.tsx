import React from 'react';

interface IThisProps {
  elem: {
    img: any;
    width: number;
    height: number;
    name: string;
    title: string;
    disabled: number;
  };
}

function AchievementsItem({ elem }: IThisProps) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
      <div className="achievements-row-box">
        <div className={`icon ${elem.disabled ? 'opacity-50' : ''}`}>
          <img src={elem.img} alt="vk" width={elem.width} />
        </div>
        <div className={`texts ${elem.disabled ? 'opacity-50' : ''}`}>
          <div>{elem.name}</div>
          <span>{elem.title}</span>
        </div>
        {elem.disabled ? (
          <div className="percent">
            <div className="blue" style={{ width: `${elem.disabled}%` }} />
          </div>
        ) : (
          <div className="button">
            <button className="btn-bl">Получен</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AchievementsItem;
