import React, { Component } from 'react';
import Slider from 'react-slick';
import './slick3.scss';
import Icons from '../icons/icons';
import img from '../../assets/images/popular-cases-item/1.png';
import pupular_item4 from '../../assets/images/popular-cases-item/4.png';
import logo5 from '../../assets/images/popular-cases-item/logo5.png';
import pupular_item5 from '../../assets/images/popular-cases-item/5.png';
import logo6 from '../../assets/images/popular-cases-item/logo6.png';
import pupular_item6 from '../../assets/images/popular-cases-item/6.png';
import logo7 from '../../assets/images/popular-cases-item/logo7.png';
import pupular_item8 from '../../assets/images/popular-cases-item/8.png';
import logo8 from '../../assets/images/popular-cases-item/logo8.png';
import pupular_item9 from '../../assets/images/popular-cases-item/9.png';
import pupular_item10 from '../../assets/images/popular-cases-item/10.png';
import pupular_item11 from '../../assets/images/popular-cases-item/11.png';
import pupular_item12 from '../../assets/images/popular-cases-item/12.png';
import { RandomKey } from '../../utils/helpers';
import pupular_item1 from '../../assets/images/popular-cases-item/1.png';
import logo1 from '../../assets/images/popular-cases-item/logo1.png';
import pupular_item2 from '../../assets/images/popular-cases-item/2.png';
import logo2 from '../../assets/images/popular-cases-item/logo2.png';
import pupular_item3 from '../../assets/images/popular-cases-item/3.png';
import logo3 from '../../assets/images/popular-cases-item/logo3.png';
import pupular_item7 from '../../assets/images/popular-cases-item/7.png';
import logo4 from '../../assets/images/popular-cases-item/logo4.png';

// interface ThisProps {
//   elem: {
//     img: any;
//     width: number;
//     name: string;
//     title: string;
//     rating: string;
//     logo: any;
//     price: string;
//     icons_name: string;
//     new_btn_text: string;
//     new_btn: boolean;
//   };
// }

const product_item = [
  {
    img: pupular_item1,
    width: 149,
    name: 'Makmilan Gr-23',
    title: 'Оружие',
    rating: '4.8',
    logo: logo1,
    price: '590 ₽',
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item2,
    width: 118,
    name: 'Супер VIP-ускоритель',
    title: 'Ранг',
    rating: '5.0',
    logo: logo2,
    price: '160 ₽ ',
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item3,
    width: 173,
    name: 'Катана - Любая версия',
    title: 'Оружие',
    rating: '3.5',
    logo: logo3,
    price: '50 ₽',
    sale: '-30%',
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item7,
    width: 145,
    name: 'АК-12 «Механика»',
    title: 'Оружие',
    rating: '4.9',
    logo: logo4,
    price: '17 ₽',
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item4,
    width: 144,
    name: 'Штурмовик Элитного отряда',
    title: 'Оружие',
    rating: '4.8',
    logo: logo5,
    price: '115 ₽',
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item5,
    width: 115,
    name: 'Перчатки штурмовика Blackwood',
    title: 'Оружие',
    rating: '5.0',
    logo: logo6,
    price: '50 ₽',
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item6,
    width: 171,
    name: 'Керамбит «Фараон»',
    title: 'Оружие',
    rating: '3.5',
    logo: logo7,
    price: '21  ₽',
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item8,
    width: 140,
    name: 'Знак «Тигр»',
    title: 'Нашивка',
    rating: '4.9',
    logo: logo8,
    price: '799 ₽',
    icons_name: 'heart',
    new_btn_text: 'Новинка',
    new_btn: true
  }
];

function SimpleSlider3() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {product_item.map((elem) => (
        <div key={RandomKey()} className="slick3-box me-4">
          <div className="image me-4">
            <img src={elem.img} width={elem.width} alt="img" />
          </div>
          <div className="texts">
            <div className="name">{elem.name}</div>
            <span>{elem.title}</span>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default SimpleSlider3;
