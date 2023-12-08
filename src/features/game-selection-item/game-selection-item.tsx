import React from 'react';
import './game-selection-item.scss';
import img1 from '../../assets/images/game-selection/1.png';
import logo1 from '../../assets/images/game-selection/logo1.png';
import DefButton from '../def-button/def-button';
import { Chunk, RandomKey } from '../../utils/helpers';
import img5 from '../../assets/images/game-selection/5.png';
import logo5 from '../../assets/images/game-selection/logo5.png';

interface ThisProps {
  elem: {
    bg: string;
    logo: string;
    logoWidth: number;
    title: string;
    btn: boolean;
    texts: string[];
  };
}

function GameSelectionItem({ elem }: ThisProps) {
  return (
    <div className="col-xl-6 col-12  mb-4">
      <div
        className="game-box"
        style={{
          backgroundImage: `url(${elem.bg})`
        }}>
        <div className="bg" />
        <div className="inner">
          <div className="logo">
            <img src={elem.logo} alt="logo1" width={elem.logoWidth} />
          </div>
          <div className="texts">
            <h4>{elem.title}</h4>
            <div className="d-flex justify-content-start align-items-start flex-wrap flex-sm-nowrap">
              {Chunk(elem.texts, 5).map((item, index) => (
                <div key={RandomKey()} className="text-bloc me-5">
                  {item.map((it) => (
                    <span key={RandomKey()}>{it}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {elem.btn ?? <button className="def-btn-mini game-btn-mini">Новинка</button>}
          <DefButton bg="#2763fe" className="game-def-btn" text="В каталог →" />
        </div>
      </div>
    </div>
  );
}

export default GameSelectionItem;
