import React from 'react';
import '../purchases-sales.scss';
import Icons from '../../../features/icons/icons';
import DefButton from '../../../features/def-button/def-button';
import img from '../../../assets/images/popular-cases-item/1.png';
import { RandomKey } from '../../../utils/helpers';
import img1 from '../../../assets/images/purchases-item/1.png';
import img2 from '../../../assets/images/purchases-item/2.png';
import img3 from '../../../assets/images/purchases-item/3.png';
import img4 from '../../../assets/images/purchases-item/4.png';
import img5 from '../../../assets/images/purchases-item/5.png';
import img6 from '../../../assets/images/purchases-item/6.png';
import logo1 from '../../../assets/images/popular-cases-item/logo1.png';
import logo2 from '../../../assets/images/popular-cases-item/logo2.png';
import logo3 from '../../../assets/images/popular-cases-item/logo3.png';
import logo4 from '../../../assets/images/popular-cases-item/logo4.png';
import logo5 from '../../../assets/images/popular-cases-item/logo5.png';
import logo6 from '../../../assets/images/popular-cases-item/logo6.png';

const purchasesUrl = [
  {
    minbtn: '№28167',
    img: img1,
    width: 67,
    text: 'Набор снаряжения "Графит"',
    subtitle: 'Оружие',
    logo: logo1,
    btnText: '590 ₽'
  },
  {
    minbtn: '№16208',
    img: img2,
    width: 220,
    text: 'АК-103 «Анубис»',
    subtitle: 'Ранг',
    logo: logo2,
    btnText: '160 ₽'
  },
  {
    minbtn: '№12883',
    img: img3,
    width: 84,
    text: 'Шлемы элиты (модель 2)',
    subtitle: 'Оружие',
    logo: logo3,
    btnText: '50 ₽'
  },
  {
    minbtn: '№24469',
    img: img4,
    width: 131,
    text: 'АК «Альфа» «Синдикат»',
    subtitle: 'Оружие',
    logo: logo4,
    btnText: '17 ₽'
  },
  {
    minbtn: '№19081',
    img: img5,
    width: 190,
    text: 'Томагавк Gerber',
    subtitle: 'Оружие',
    logo: logo5,
    btnText: '115 ₽'
  },
  {
    minbtn: '№14903',
    img: img6,
    width: 181,
    text: 'Uzkon UNG-12',
    subtitle: 'Оружие',
    logo: logo6,
    btnText: '50 ₽'
  }
];

function PurchasesSalesItem() {
  return (
    <div className="row mt-4">
      {purchasesUrl.map((el) => (
        <div key={RandomKey()} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
          <div className="popular-cases-row-box">
            <div className="image">
              <div className="btn-bloc">
                <div className="button-sale d-flex align-content-center">
                  <button className="def-btn-mini">{el.minbtn}</button>
                </div>
                <div className="icon-heart">
                  <Icons name={'heart-full'} width={16} color={'#ff0000'} />
                </div>
              </div>
              <div className="img">
                <img src={el.img} width={el.width} alt="img" />
              </div>
            </div>
            <div className="ratting-bloc">
              <h5 className="title">{el.text}</h5>
              <span className="sub-title">{el.subtitle}</span>
              <div className="ratting-bloc-buttons">
                <div className="rating purchases-rating">
                  <div className="icon">
                    <img className="icon-user" src={el.logo} alt="icon" width={34} />
                  </div>
                </div>
                <div className="buttons purchases-buttons d-flex align-items-center">
                  <DefButton
                    className="purchases-btn"
                    bg="#f7f8fb"
                    filter={'#fff'}
                    text={
                      <>
                        <Icons className="me-2" name="shopping-cart" width={16} color="#212121" />
                        {el.btnText}
                      </>
                    }
                  />
                  <button className="chat-button">
                    <Icons name="chat" width={16} color="#fff" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PurchasesSalesItem;
