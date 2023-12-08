import React from 'react';
import styled from 'styled-components';
import case1 from '../../../assets/images/popular-cases-item/1.png';
import case2 from '../../../assets/images/popular-cases-item/5.png';
import case3 from '../../../assets/images/popular-cases-item/9.png';
import { RandomKey } from '../../../utils/helpers';
import { Fade } from 'react-awesome-reveal';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 230px);
  border-radius: 25px;
  background-color: #ffffff;
  padding: 30px 22px;
`;

const WrapperBody = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  overflow-y: auto;
  overflow-x: hidden;
`;

const Image = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: #f7f7fb;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 19px;
  img {
    width: 30px;
  }
`;

const items = [
  {
    name: 'Штурмовик Элитного отряда',
    image: case1,
    index: '№5204'
  },
  {
    name: 'Золотой HArms CQR',
    image: case2,
    index: '№5254'
  },
  {
    name: 'Desert Tech MDRX',
    image: case1,
    index: '№5604'
  },
  {
    name: 'IMBEL IA2 Assault ',
    image: case3,
    index: '№5804'
  },
  {
    name: 'Kel-Tec RDB-C «Скорость»',
    image: case1,
    index: '№5294'
  },
  {
    name: 'Kel-Tec KS7',
    image: case2,
    index: '№5304'
  },
  {
    name: 'S&W M&P R8 - Любая',
    image: case3,
    index: '№5204'
  },
  {
    name: 'АК-47 «Скорость»',
    image: case2,
    index: '№5504'
  },
  {
    name: 'Kel-Tec RDB-C «Скорость»',
    image: case2,
    index: '№5294'
  },
  {
    name: 'Kel-Tec KS7',
    image: case1,
    index: '№5304'
  },
  {
    name: 'S&W M&P R8 - Любая',
    image: case2,
    index: '№5204'
  },
  {
    name: 'АК-47 «Скорость»',
    image: case1,
    index: '№5504'
  }
];

function Deal() {
  return (
    <Wrapper>
      <div className="fs-20 c-black fw-bold mb-3">
        Сделка <span className="c-grey">(10)</span>
      </div>

      <WrapperBody>
        {items.map((item, index) => (
          <Fade key={RandomKey()} direction="right" duration={800} delay={index * 60} triggerOnce>
            <div className="d-flex justify-content-start align-items-start mb-4">
              <Image>
                <img src={item.image} alt="war image" />
              </Image>
              <div>
                <p className="mb-0 fs-18 c-black fw-bold">{item.name}</p>
                <p className="mb-0 fs-16 c-grey">{item.index}</p>
              </div>
            </div>
          </Fade>
        ))}
      </WrapperBody>
    </Wrapper>
  );
}

export default Deal;
