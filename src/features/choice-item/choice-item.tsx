import React, { useState } from 'react';
import './choice-item.scss';
import img1 from '../../assets/images/choice/4.png';
import DefButton from '../def-button/def-button';
import Icons from '../icons/icons';

interface ThisProps {
  elem: {
    img: any;
    btn1: string;
    btn2: string;
    active: boolean;
  };
}

function ChoiceItem({ elem }: ThisProps) {
  const [active, setActive] = useState<boolean>(elem.active);

  function buy() {
    setActive(true);
  }
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12">
      <div className={`ChoiceItem ${active ? 'active' : ''}`}>
        <div className="image" />
        {active ? (
          <img src={elem.img} alt="img" width={153} />
        ) : (
          <Icons name="question" width={44} className="questions" />
        )}
        {active ? (
          <DefButton text={elem.btn1} bg="#2763fe" className="ChoiceItem-btn" />
        ) : (
          <DefButton text={elem.btn2} bg="#2763fe" className="ChoiceItem-btn" onClick={buy} />
        )}
      </div>
    </div>
  );
}

export default ChoiceItem;
