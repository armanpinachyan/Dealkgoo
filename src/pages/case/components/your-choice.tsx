import React from 'react';
import './your-choice.scss';
import ChoiceItem from '../../../features/choice-item/choice-item';
import img4 from '../../../assets/images/choice/4.png';
import img3 from '../../../assets/images/choice/3.png';
import img2 from '../../../assets/images/case/logo1.png';
import img1 from '../../../assets/images/case/logo8.png';
import { RandomKey } from '../../../utils/helpers';
import styled from 'styled-components';

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
`;

function YourChoice() {
  return (
    <>
      <div className="your-choice-row row">
        {Choice_arr.map((elem) => (
          <ChoiceItem key={RandomKey()} elem={elem} />
        ))}
      </div>
      <div className="case-buttons">
        <Button color="#feb348" className="me-md-3 me-0">
          Демо открытие
        </Button>
        <Button color="#93d43f">Открыть за 1 490 DG</Button>
      </div>
    </>
  );
}

export default YourChoice;
