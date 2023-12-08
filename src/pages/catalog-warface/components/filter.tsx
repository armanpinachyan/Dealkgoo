import React, { useState } from 'react';
import styled from 'styled-components';
import { Drawer, FormControlLabel, Radio, RadioGroup, Slider } from '@mui/material';
import Icons from '../../../features/icons/icons';
import CatalogSelect from './catalog-select';
import DefButton from '../../../features/def-button/def-button';
import { onChangePrice } from '../../../utils/helpers';

const FilterBody = styled.div`
  width: 321px;
  height: 100vh;
  overflow: auto;
  background: #fff;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 30px;
`;

const PriceMinMax = styled.div`
  width: 120px;
  height: 60px;
  border-radius: 15px;
  filter: drop-shadow(0px 5px 12.5px rgba(184, 193, 218, 0.3));
  background-color: #ffffff;
  padding-top: 9px;
  padding-left: 20px;
  .title {
    font-size: 14px;
    color: #d2d4df;
    margin-bottom: -2px;
  }
  .price {
    font-size: 16px;
    color: #212121;
    font-weight: bold;
    margin-bottom: 0;
    width: 95%;
  }
`;

const ButtonSend = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  filter: drop-shadow(0px 5px 12.5px rgba(39, 99, 254, 0.3));
  background-color: #2763fe;
  border: 0;
  font-size: 16px;
  color: #ffffff;
  font-weight: bold;
  text-align: center;
  margin-bottom: 19px;
`;

const ButtonClear = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 20px;
  background-color: #f2f3fb;
  border: 0;
  font-size: 16px;
  color: #212121;
  font-weight: bold;
  text-align: center;
`;

function valuetext(value: number) {
  return `${value}`;
}

interface IThisProps {
  status: boolean;
  onClose: () => void;
}

function Filter({ status, onClose }: IThisProps) {
  // priceValue
  const [priceValue, setPriceValue] = React.useState<number[]>([10, 30000]);
  const handleChange = (event: Event, newValue: number | number[]) => {
    setPriceValue(newValue as number[]);
  };

  // rang
  const [rang, setRang] = React.useState<number[]>([10, 30000]);
  const changeRang = (event: Event, newValue: number | number[]) => {
    setRang(newValue as number[]);
  };

  // donat
  const [donat, setDonat] = React.useState<number[]>([10, 30000]);
  const changeDonat = (event: Event, newValue: number | number[]) => {
    setDonat(newValue as number[]);
  };

  return (
    <Drawer anchor="right" open={status} onClose={onClose}>
      <FilterBody>
        <div className="d-flex justify-content-between align-items-start">
          <p className="fs-24 c-black fw-bold mt-2">Все фильтры</p>
          <Icons
            name="close"
            width={24}
            color="#d6d9ef"
            colorHover="#000"
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>

        <div>
          <p className="mb-1 c-black fs-16 fw-bold">Цена</p>
          <Slider
            value={priceValue}
            onChange={handleChange}
            getAriaValueText={valuetext}
            className="def-slider"
            min={10}
            max={30000}
          />
        </div>
        <div className="d-flex justify-content-between align-items-start mt-2">
          <PriceMinMax>
            <p className="title">От</p>
            <input
              type="text"
              className="price"
              value={priceValue[0]}
              onChange={(e) =>
                setPriceValue([onChangePrice(e.target.value, 0, 29999), priceValue[1]])
              }
            />
          </PriceMinMax>
          <PriceMinMax>
            <p className="title">До</p>
            <input
              type="text"
              className="price"
              value={priceValue[1]}
              onChange={(e) =>
                setPriceValue([priceValue[0], onChangePrice(e.target.value, 0, 30000)])
              }
            />
          </PriceMinMax>
        </div>

        <div className="mt-39">
          <CatalogSelect items={['Буст побед', 'hello']} placeholder="Сервер" />
        </div>

        <div>
          <p className="mb-1 c-black fs-16 fw-bold mt-39">Ранг</p>
          <Slider
            value={rang}
            onChange={changeRang}
            getAriaValueText={valuetext}
            className="def-slider"
            min={10}
            max={30000}
          />
        </div>
        <div className="d-flex justify-content-between align-items-start mt-2">
          <PriceMinMax>
            <p className="title">От</p>
            <input
              type="text"
              className="price"
              value={rang[0]}
              onChange={(e) => setRang([onChangePrice(e.target.value, 0, 29999), rang[1]])}
            />
          </PriceMinMax>
          <PriceMinMax>
            <p className="title">До</p>
            <input
              type="text"
              className="price"
              value={rang[1]}
              onChange={(e) => setRang([rang[0], onChangePrice(e.target.value, 0, 30000)])}
            />
          </PriceMinMax>
        </div>

        <div>
          <p className="mb-1 c-black fs-16 fw-bold mt-39">Количество доната</p>
          <Slider
            value={donat}
            onChange={changeDonat}
            getAriaValueText={valuetext}
            className="def-slider"
            min={10}
            max={30000}
          />
        </div>
        <div className="d-flex justify-content-between align-items-start mt-2">
          <PriceMinMax>
            <p className="title">От</p>
            <input
              type="text"
              className="price"
              value={donat[0]}
              onChange={(e) => setDonat([onChangePrice(e.target.value, 0, 29999), donat[1]])}
            />
          </PriceMinMax>
          <PriceMinMax>
            <p className="title">До</p>
            <input
              type="text"
              className="price"
              value={donat[1]}
              onChange={(e) => setDonat([donat[0], onChangePrice(e.target.value, 0, 30000)])}
            />
          </PriceMinMax>
        </div>

        <div className="mt-39">
          <CatalogSelect items={['Не выбрано', 'Не выбрано 1']} placeholder="Тип аккаунта" />
        </div>

        <div>
          <p className="mb-1 c-black fs-16 fw-bold mt-39">Продавец</p>
          <RadioGroup defaultValue="female" name="radio-buttons-group" className="def-radio">
            <FormControlLabel value="online" control={<Radio />} label="Онлайн" />
            <FormControlLabel value="offline" control={<Radio />} label="Офлайн" />
          </RadioGroup>
        </div>

        <div className="mt-39">
          <ButtonSend>Применить фильтр</ButtonSend>
          <ButtonClear className="mb-3">Сбросить фильтр</ButtonClear>
        </div>
      </FilterBody>
    </Drawer>
  );
}

export default Filter;
