import React from 'react';
import './prize.scss';
import Icons from '../icons/icons';

interface ThisProps {
  elem: {
    name: string;
    title: string;
    subtitle: string;
    bg: any;
    img: any;
    index: number;
  };
}

function Prize({ elem }: ThisProps) {
  return (
    <div
      className={`prize-box ${elem.index === 0 ? 'active' : ''}`}
      style={{
        backgroundColor: `${elem.bg}`
      }}>
      <div className="text-box">
        <h3 className="name">
          {elem.index === 0 && <Icons name="crown" width={16} color="#fff" className="me-2" />}

          <span>{elem.name}</span>
        </h3>
        <h5 className="title">{elem.title}</h5>
        <span className="sub-title">{elem.subtitle}</span>
      </div>
      <div className="image-box">
        <div className="image" />
        <img src={elem.img} alt="logo" width={80} />
        <span className="image-name">{elem.subtitle}</span>
      </div>
    </div>
  );
}

export default Prize;
