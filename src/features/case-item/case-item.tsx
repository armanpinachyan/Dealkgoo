import React from 'react';
import './case-item.scss';
import Icons from '../icons/icons';
import DefButton from '../def-button/def-button';

interface IThisProps {
  casiItem: {
    bg: any;
    ruletka: string;
    text: string;
    price: string;
    btn: string;
    filter: string;
    sale?: string;
  };
}

function CaseItem({ casiItem }: IThisProps) {
  return (
    <div className="col-lg-4 col-sm-6 col-12  mb-4">
      <div
        className="case-item"
        style={{
          background: `url(${casiItem.bg})`
        }}>
        <button className={`def-btn-mini ${casiItem.ruletka}`}>Рулетка</button>
        <h5>{casiItem.text}</h5>
        <div className="price">
          <Icons name={'shopping-cart'} color="#fff" width={16} />
          <span>{casiItem.price}</span>
          {casiItem.sale && <div className="sale">{casiItem.sale}</div>}
        </div>
        <DefButton filter={casiItem.filter} bg={casiItem.btn} text={'Крутить рулетку'} />
      </div>
    </div>
  );
}

export default CaseItem;
