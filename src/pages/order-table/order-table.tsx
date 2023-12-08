import React, { useState } from 'react';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import MainTemplate from '../../features/main-template/main-template';
import { Box, Pagination, Slider, Tab, Tabs } from '@mui/material';
import { onChangePrice, RandomKey } from '../../utils/helpers';
import PrintRating from '../../features/print-rating/print-rating';
import Icons from '../../features/icons/icons';
import styled from 'styled-components';
import { Fade } from 'react-awesome-reveal';
import { Button, Modal } from 'react-bootstrap';
import CatalogSelect from '../catalog-warface/components/catalog-select';
import DefInput from '../../features/def-input/def-input';
import DefButton from '../../features/def-button/def-button';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function valuetext(value: number) {
  return `${value}`;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && <div>{children}</div>}
    </div>
  );
}

const OrderItem = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 25px;
  background-color: #ffffff;
  align-items: center;
  padding: 0 20px;
  margin-bottom: 9px;
  transition: 0.3s;
  transform: scale(1);
  &:hover {
    transform: scale(1.02);
  }
`;

const OrderItemTitle = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 25px;
  align-items: center;
  padding: 0 20px;
  margin-top: 39px;
`;

const PriceMinMax = styled.div`
  width: 100%;
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

const items = [
  'Аккаунт Warface за хор...',
  'Black Hawk «Тайга» (пин-код)',
  'Warface VIP-ускоритель',
  'Аккаунт Warface',
  'Скин Awinaw на пистолет...',
  'Bushmaster BA50 - Люб...',
  'АК-47 «Скорость» на 1 день',
  'Typhoon F12 «Следопыт»',
  'Камуфляж Open Cup: Season'
];

function OrderTable() {
  const [value, setValue] = useState(0);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    if (newValue < 2) {
      setValue(newValue);
    }
  };

  // priceValue
  const [priceValue, setPriceValue] = React.useState<number[]>([10, 30000]);
  const handleChangePrice = (event: Event, newValue: number | number[]) => {
    setPriceValue(newValue as number[]);
  };

  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="draw">
          <h2 className="page-heading">Стол заказов</h2>
        </div>

        <Box sx={{ width: '100%' }} className="Table">
          <Box
            className="Table-top position-relative"
            sx={{ borderBottom: 0, borderColor: 'divider' }}>
            <Tabs className="Table-item" value={value} onChange={handleChange}>
              <Tab label="Мои заказы" className="Table-item-tab" />
              <Tab label="Биржа заказов" className="Table-item-tab" />
              <Tab
                sx={{
                  width: 155,
                  alignItems: 'start'
                }}
                onClick={handleShow}
                label={
                  <>
                    Выбор игры
                    <Icons
                      name="right-arrow-svgrepo"
                      width={12}
                      color="#2763fe"
                      className="down-icon"
                    />
                  </>
                }
                className="Table-item-tab more"
              />
            </Tabs>
          </Box>

          <div className="Table-inner">
            <CustomTabPanel key={RandomKey()} value={value} index={0}>
              <OrderItemTitle className="row">
                <div className="col-2">
                  <p className="fs-16 c-grey">Название</p>
                </div>
                <div className="col-2">
                  <p className="fs-16 c-grey">Каталог</p>
                </div>
                <div className="col-3">
                  <p className="fs-16 c-grey">Описание</p>
                </div>
                <div className="col-2">
                  <p className="fs-16 c-grey">Фильтры</p>
                </div>
                <div className="col-2">
                  <p className="fs-16 c-grey">Цена</p>
                </div>
                <div className="col-1" />
              </OrderItemTitle>
              {items.map((item) => (
                <OrderItem key={RandomKey()} className="row">
                  <div className="col-2">
                    <span className="fs-16 c-black fw-bold cursor-pointer">{item}</span>
                  </div>
                  <div className="col-2">
                    <span className="fs-16 c-blue">Warface/Аккаунты</span>
                  </div>
                  <div className="col-3">
                    <span className="fs-16 c-grey">После покупки вы получаете на почту...</span>
                  </div>
                  <div className="col-2">
                    <span className="fs-16 c-black">Добавлены</span>
                  </div>
                  <div className="col-2">
                    <span className="fs-16 c-black fw-bold">от 675 ₽ до 1 345 ₽</span>
                  </div>
                  <div className="col-1 text-end">
                    <span className="fs-16 c-grey cursor-pointer">
                      <Icons name="delete" width={14} className="me-1" color="#d6d9ef" />
                      Удалить
                    </span>
                  </div>
                </OrderItem>
              ))}
              <div className="d-flex justify-content-center align-items-center mt-40">
                <Pagination count={10} color="primary" className="def-pagination" />
              </div>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              2
            </CustomTabPanel>
          </div>
        </Box>
        <DashboardFooter />
      </div>
      <Modal show={show} onHide={handleClose} centered className="def-modal w-500">
        <div className="d-flex justify-content-between align-items-start">
          <p className="fs-24 c-black fw-bold mt-2">Фильтры</p>
          <Icons
            name="close"
            width={24}
            color="#d6d9ef"
            colorHover="#000"
            className="cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <Modal.Body>
          <div className="mb-19 mt-3">
            <CatalogSelect items={['Не выбрано', 'hello']} placeholder="Выбор игры" />
          </div>
          <div className="mb-19">
            <DefInput placeholder="Заголовок" />
          </div>
          <div className="row mb-19">
            <div className="col-6">
              <CatalogSelect items={['Снаряжение', 'hello']} placeholder="Тип пин-кода" />
            </div>
            <div className="col-6">
              <CatalogSelect items={['Навсегда', 'hello']} placeholder="Срок" />
            </div>
          </div>
          <div className="row mb-19">
            <div className="col-6">
              <DefInput placeholder="Содержимое" />
            </div>
            <div className="col-6">
              <DefInput placeholder="Кол-во" />
            </div>
          </div>
          <div className="mb-19">
            <DefInput placeholder="Описание (не обязательно)" textarea />
          </div>
          <div>
            <p className="mb-1 c-black fs-16 fw-bold">Цена</p>
            <Slider
              value={priceValue}
              onChange={handleChangePrice}
              getAriaValueText={valuetext}
              className="def-slider"
              min={10}
              max={30000}
            />
          </div>
          <div className="row justify-content-between align-items-start mt-2">
            <div className="col-6">
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
            </div>
            <div className="col-6">
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
          </div>
          <div className="mt-29">
            <DefButton
              bg="#2763fe"
              text="Заказать товар"
              filter="drop-shadow(0px 5px 12.5px rgba(39,99,254,0.3))"
              className="w-100"
              height={50}
              borderRadius={20}
            />
          </div>
        </Modal.Body>
      </Modal>
    </MainTemplate>
  );
}

export default OrderTable;
