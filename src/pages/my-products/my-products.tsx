import React, { useState } from 'react';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import MainTemplate from '../../features/main-template/main-template';
import styled from 'styled-components';
import DefButton from '../../features/def-button/def-button';
import PopularCasesItem from '../../features/popular-cases-item/popular-case-item';
import { onChangePrice, RandomKey } from '../../utils/helpers';
import pupular_item1 from '../../assets/images/popular-cases-item/1.png';
import logo1 from '../../assets/images/popular-cases-item/logo1.png';
import pupular_item2 from '../../assets/images/popular-cases-item/2.png';
import logo2 from '../../assets/images/popular-cases-item/logo2.png';
import pupular_item3 from '../../assets/images/popular-cases-item/3.png';
import logo3 from '../../assets/images/popular-cases-item/logo3.png';
import pupular_item7 from '../../assets/images/popular-cases-item/7.png';
import logo4 from '../../assets/images/popular-cases-item/logo4.png';
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
import Icons from '../../features/icons/icons';
import { Modal } from 'react-bootstrap';
import CatalogSelect from '../catalog-warface/components/catalog-select';
import DefInput from '../../features/def-input/def-input';
import { Pagination, Slider } from '@mui/material';

const Header = styled.div`
  width: 100%;
  height: 60px;
  border-radius: 25px;
  filter: drop-shadow(0px 5px 12.5px rgba(184, 193, 218, 0.3));
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 22px;
  padding-right: 10px;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
    justify-content: start;
    height: auto;
    gap: 15px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
`;

const popular_cases = [
  {
    img: pupular_item1,
    width: 149,
    name: 'Makmilan Gr-23',
    title: 'Оружие',
    rating: '4.8',
    logo: logo1,
    price: '590 ₽',
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
    new_btn_text: 'Новинка',
    new_btn: false
  },
  {
    img: pupular_item7,
    width: 145,
    name: 'АК-12 «Механика»',
    title: 'Оружие',
    rating: '4.9',
    logo: logo4,
    price: '17 ₽',
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
    new_btn_text: 'Новинка',
    new_btn: false
  },
  {
    img: pupular_item6,
    width: 171,
    name: 'Керамбит «Фараон»',
    title: 'Оружие',
    rating: '3.5',
    logo: logo7,
    price: '21  ₽',
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
    new_btn_text: 'Хит продаж',
    btn_color: 'yellow',
    new_btn: true
  },
  {
    img: pupular_item9,
    width: 192,
    name: 'Золотой HArms CQR',
    title: 'Оружие',
    rating: '4.5',
    logo: logo5,
    price: '378 ₽',
    new_btn_text: 'Гарантия',
    btn_color: 'green',
    new_btn: true
  },
  {
    img: pupular_item10,
    width: 108,
    name: 'Micro Desert Eagle',
    title: 'Оружие',
    rating: '4.9',
    logo: logo6,
    price: '100  ₽',
    new_btn_text: 'Новинка',
    new_btn: true
  },
  {
    img: pupular_item11,
    width: 217,
    name: 'IWI Carmel «Ацтек»',
    title: 'Оружие',
    rating: '4.0',
    logo: logo7,
    price: '600  ₽',
    new_btn_text: 'Новинка',
    new_btn: false
  },
  {
    img: pupular_item12,
    width: 100,
    name: 'Шлем «атлас» инженер',
    title: 'Нашивка',
    rating: '3.5',
    logo: logo8,
    price: '155  ₽',
    new_btn_text: 'Новинка',
    new_btn: true
  }
];

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

function MyProducts() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // priceValue
  const [priceValue, setPriceValue] = useState<number>(10);

  const [productSuccess, setProductSuccess] = useState<boolean>(false);

  const handleCloseProductSuccess = () => setProductSuccess(false);
  const handleShowProductSuccess = () => setProductSuccess(true);

  const [removeProduct, setRemoveProduct] = useState<boolean>(false);

  const handleCloseRemoveProduct = () => setRemoveProduct(false);
  const handleShowRemoveProduct = () => setRemoveProduct(true);

  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="dashboard-home-body">
          <h2 className="page-heading">Мои товары</h2>
          <Header>
            <span className="fs-sm-16 fs-13 c-grey fw-bolder">
              Всего доступно для продажи 20 товаров одного типа.
            </span>
            <div className="d-flex justify-content-sm-end align-items-sm-center flex-column flex-sm-row justify-content-start align-items-start">
              <DefButton
                bg="#feb348"
                text="Добавить товар"
                filter="drop-shadow(0px 5px 12.5px rgba(254,179,72,0.3))"
                className="me-sm-4 me-0 mb-sm-0 mb-3"
                onClick={handleShowProductSuccess}
              />
              <DefButton
                bg="#2763ff"
                text="Поднять в ТОП ↑"
                filter="drop-shadow(0px 5px 12.5px rgba(39,99,255,0.3))"
              />
            </div>
          </Header>

          <div className="row mt-29">
            {popular_cases.map((elem) => (
              <div key={RandomKey()} className="col-lg-3 col-md-4 col-sm-6 col-12  mb-4">
                <div className="popular-cases-row-box">
                  <div className="image">
                    <div className="btn-bloc">
                      <div className="button-sale d-flex align-content-center">
                        {elem.new_btn && (
                          <button
                            className={`def-btn-mini ${elem.btn_color ? `${elem.btn_color}` : ''}`}>
                            {elem.new_btn_text}
                          </button>
                        )}
                        {elem.sale && <div className="sale">{elem.sale}</div>}
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="icon-heart me-2" onClick={handleShow}>
                          <Icons name="edit" width={16} color="#2763ff" />
                        </div>
                        <div className="icon-heart" onClick={handleShowRemoveProduct}>
                          <Icons name="delete" width={16} color="#ff0000" />
                        </div>
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
            ))}
          </div>
          <div className="d-flex justify-content-center align-items-center mt-20">
            <Pagination count={10} color="primary" className="def-pagination" />
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered className="def-modal w-500">
        <div className="d-flex justify-content-between align-items-start">
          <p className="fs-24 c-black fw-bold mt-2">Редактирование товара</p>
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
            <CatalogSelect items={['Буст побед', 'hello']} placeholder="Категория" />
          </div>
          <div className="mb-19">
            <DefInput placeholder="Заголовок" />
          </div>
          <div className="row mb-19">
            <div className="col-6">
              <CatalogSelect items={['ru.warface.com', 'hello']} placeholder="Сервер" />
            </div>
            <div className="col-6">
              <CatalogSelect items={['Не выбрано', 'hello']} placeholder="Режим" />
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
          <div className="row justify-content-between align-items-start mt-2">
            <div className="col-6">
              <PriceMinMax>
                <p className="title">От</p>
                <input
                  type="text"
                  className="price"
                  value={priceValue}
                  onChange={(e) => setPriceValue(onChangePrice(e.target.value, 0, 29999))}
                />
              </PriceMinMax>
            </div>
            <div className="col-6">
              <CatalogSelect items={['Отключен', 'hello']} placeholder="Публичный доступ" />
            </div>
          </div>
          <div className="row mt-29">
            <div className="col-6">
              <DefButton
                bg="#93d43f"
                text="Сохранить"
                filter="drop-shadow(0px 5px 12.5px rgba(147,212,63,0.3))"
                className="w-100"
                height={50}
                borderRadius={20}
              />
            </div>
            <div className="col-6">
              <DefButton
                bg="#ee124b"
                text="Удалить товар"
                filter="drop-shadow(0px 5px 12.5px rgba(238,18,75,0.3))"
                className="w-100"
                height={50}
                borderRadius={20}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/*MODAL SUCCESS FOR PRODUCT CREATED*/}

      <Modal
        show={productSuccess}
        onHide={handleCloseProductSuccess}
        centered
        className="def-modal w-500">
        <div className="d-flex justify-content-between align-items-start">
          <p className="fs-24 c-black fw-bold mt-2">Ваш товар успешно добавлен</p>
          <Icons
            name="close"
            width={24}
            color="#d6d9ef"
            colorHover="#000"
            className="cursor-pointer"
            onClick={handleCloseProductSuccess}
          />
        </div>
        <Modal.Body>
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="mt-39 mb-29">
              <Icons name="tick-full" width={64} color="#93d43f" />
            </div>
            <p className="text-center fs-16 c-grey">
              Ваш товар успешно создан, чтобы ваш товар отображался публичном доступе вам надо
              Поднять в топ.
            </p>
            <DefButton
              bg="#2763fe"
              text="Поднять в ТОП ↑"
              filter="drop-shadow(0px 5px 12.5px rgba(39,99,254,0.3))"
              className="w-100 mt-29"
              height={50}
              borderRadius={20}
              width={220}
            />
          </div>
        </Modal.Body>
      </Modal>

      {/*REMOVE PRODUCT*/}

      <Modal show={removeProduct} onHide={handleCloseRemoveProduct} centered className="def-modal">
        <div className="d-flex justify-content-between align-items-start">
          <p className="fs-24 c-black fw-bold mt-2">Удаление товара</p>
        </div>
        <Modal.Body>
          <p className="fs-16 c-grey">Вы действительно хотите удалить товар?</p>
          <div className="row mt-28">
            <div className="col-6">
              <DefButton
                bg="#93d43f"
                text="Подтвердить"
                filter="drop-shadow(0px 5px 12.5px rgba(147,212,63,0.3))"
                className="w-100"
              />
            </div>
            <div className="col-6">
              <DefButton
                bg="#ee124b"
                text="Отменить"
                filter="drop-shadow(0px 5px 12.5px rgba(238,18,75,0.3))"
                className="w-100"
                onClick={handleCloseRemoveProduct}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </MainTemplate>
  );
}

export default MyProducts;
