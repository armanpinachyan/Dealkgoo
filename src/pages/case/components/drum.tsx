import React from 'react';
import './drum.scss';
import DefButton from '../../../features/def-button/def-button';
import styled from 'styled-components';
import Drumimg from '../../../assets/images/drum.png';

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

function Drum() {
  return (
    <>
      <div className="image-drum">
        <img src={Drumimg} alt="drum" />
      </div>
      <div className="case-buttons">
        <Button color="#feb348" className="me-3">
          Демо прокрутка
        </Button>
        <DefButton text="Крутить за 149 ₽" bg="#2763fe" className="me-3" />
        <Button color="#93d43f">Крутить за 1 490 DG</Button>
      </div>
    </>
  );
}

export default Drum;
