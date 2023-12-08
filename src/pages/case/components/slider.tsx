import React from 'react';
import { RandomKey } from '../../../utils/helpers';
import img1 from '../../../assets/images/case/logo8.png';
import img2 from '../../../assets/images/case/logo1.png';
import img3 from '../../../assets/images/choice/3.png';
import img4 from '../../../assets/images/choice/4.png';
import styled from 'styled-components';
import DefButton from '../../../features/def-button/def-button';
import pupular_item4 from '../../../assets/images/popular-cases-item/4.png';
import logo5 from '../../../assets/images/popular-cases-item/logo5.png';
import pupular_item5 from '../../../assets/images/popular-cases-item/5.png';
import logo6 from '../../../assets/images/popular-cases-item/logo6.png';
import pupular_item6 from '../../../assets/images/popular-cases-item/6.png';
import logo7 from '../../../assets/images/popular-cases-item/logo7.png';
import pupular_item8 from '../../../assets/images/popular-cases-item/8.png';
import logo8 from '../../../assets/images/popular-cases-item/logo8.png';
import pupular_item9 from '../../../assets/images/popular-cases-item/9.png';
import pupular_item10 from '../../../assets/images/popular-cases-item/10.png';
import pupular_item11 from '../../../assets/images/popular-cases-item/11.png';
import pupular_item12 from '../../../assets/images/popular-cases-item/12.png';
import './slider2.scss';
import SimpleSlider3 from '../../../features/slick1/slick3';

const Choice_arr = [
  {
    img: img1,
    btn1: 'Ваш выбор',
    btn2: 'Открыть за 149 ₽',
    active: false
  },
  {
    img: img2,
    btn1: 'Ваш выбор',
    btn2: 'Открыть за 149 ₽',
    active: true
  },
  {
    img: img3,
    btn1: 'Ваш выбор',
    btn2: 'Открыть за 149 ₽',
    active: true
  },
  {
    img: img4,
    btn1: 'Ваш выбор',
    btn2: 'Открыть за 149 ₽',
    active: false
  }
];

const Button = styled.button<{ color: string }>`
  height: 40px;
  border-radius: 20px;
  background-color: #f6f7ff;
  border: 1px solid ${({ color }) => color};
  font-size: 16px;
  color: ${({ color }) => color};
  font-weight: bold;
  text-align: center;
  padding: 0 28px;
  white-space: nowrap;
`;

function Slider() {
  return (
    <>
      <div className="slider-row mt-5">
        <SimpleSlider3 />
      </div>
      <div className="case-buttons">
        <Button color="#feb348" className="me-md-3 me-0">
          Демо прокрутка
        </Button>
        <DefButton text="Крутить за 149 ₽" bg="#2763fe" className="me-md-3 me-0" />
        <Button color="#93d43f">Крутить за 1 490 DG</Button>
      </div>
    </>
  );
}

export default Slider;
