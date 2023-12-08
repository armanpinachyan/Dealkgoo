import React from 'react';
import DefButton from '../def-button/def-button';
import Icons from '../icons/icons';
import './popular-cases-item.scss';

interface IThisProps {
  elem: {
    img: any;
    width: number;
    name: string;
    title: string;
    rating: string;
    logo: any;
    price: string;
    sale?: string;
    icons_name: string;
    new_btn: boolean;
    new_btn_text: string;
    btn_color?: string;
    hover_text?: string;
    key1?: string;
    key2?: string;
    key3?: string;
    key4?: string;
    key1_text?: string;
    key2_text?: string;
    key3_text?: string;
    key4_text?: string;
  };
}

function PopularCasesItem({ elem }: IThisProps) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12  mb-4">
      <div className="popular-cases-row-box">
        <div className="image">
          <div className="btn-bloc">
            <div className="button-sale d-flex align-content-center">
              {elem.new_btn && (
                <button className={`def-btn-mini ${elem.btn_color ? `${elem.btn_color}` : ''}`}>
                  {elem.new_btn_text}
                </button>
              )}
              {elem.sale && <div className="sale">{elem.sale}</div>}
            </div>
            <div className="icon-heart">
              <Icons name={elem.icons_name} width={16} color={'#ff0000'} />
            </div>
          </div>
          <div className="img">
            <img src={elem.img} width={elem.width} alt="img" />
          </div>
        </div>

        <div className="ratting-bloc">
          <h5 className="title">{elem.name}</h5>
          <span className="sub-title">{elem.title}</span>
          <div className="ratting-bloc-buttons">
            <div className="rating">
              <div className="icon">
                <img className="icon-user me-2" src={elem.logo} alt="icon" width={34} />
                <Icons name={'star'} width={16} color={'#ffba00'} />
              </div>
              <span className="ms-2">{elem.rating}</span>
            </div>
            <DefButton
              bg="#2763fe"
              text={
                <>
                  <Icons className="me-2" name="shopping-cart" width={16} color="#fff" />
                  {elem.price}
                </>
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopularCasesItem;
