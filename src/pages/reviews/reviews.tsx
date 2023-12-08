import React from 'react';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import MainTemplate from '../../features/main-template/main-template';
import styled from 'styled-components';
import PrintRating from '../../features/print-rating/print-rating';
import { RandomKey } from '../../utils/helpers';
import DefButton from '../../features/def-button/def-button';
import Icons from '../../features/icons/icons';
import img1 from '../../assets/images/reviews/1.png';
import img2 from '../../assets/images/reviews/2.png';
import img3 from '../../assets/images/reviews/3.png';
import img4 from '../../assets/images/reviews/4.png';
import img5 from '../../assets/images/reviews/5.png';
import img6 from '../../assets/images/reviews/6.png';
import { Pagination } from '@mui/material';

const Wrapper = styled.div`
  width: 100%;
  border-radius: 25px;
  background-color: #ffffff;
  padding: 21px;
  margin-bottom: 19px;
  @media (max-width: 576px) {
    padding: 15px;
  }
`;

const reviewsItem = [
  {
    img: img1,
    name: 'BubMotion',
    rating: 5,
    dataCreated: '08.05.2023',
    text:
      'Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр для всех платформ,\n' +
      'включая последние релизы. Цены были весьма конкурентными, а персонал оказался очень дружелюбным и помог мне\n' +
      'выбрать игру, которая мне подходит.'
  },
  {
    img: img2,
    name: 'FeelAppendix',
    rating: 4.5,
    dataCreated: '07.05.2023',
    text: 'Сперва была задержка.Затем обратился в онлайн чат с поддержкой и в течении 5-7 минут все выслали.'
  },
  {
    img: img3,
    name: 'PassZest',
    rating: 5.0,
    dataCreated: '06.05.2023',
    text: 'Все сделали очень быстро и качественно, плюс ещё и душ накинули вместо 12000 получилось 13500 так ещё и голды накинули с верху плюс персонажей прокачали и снаряжение тоже'
  },
  {
    img: img4,
    name: 'LateFraction',
    rating: 5.0,
    dataCreated: '05.05.2023',
    text:
      'Приветствую, очень крутой сайт, сначала очень переживал потерять аккаунт и банковскую карту. Но к счастью всё\n' +
      'прошло успешно! Быстро и качественно.\n' +
      '\n' +
      'А также накинули монет, и снаряжение! Рекомендую'
  },
  {
    img: img5,
    name: 'MunchBox',
    rating: 4.5,
    dataCreated: '04.05.2023',
    text: 'Все работает отлично. Приобретал помощь в прохождении башни, всё сделали быстро.'
  },
  {
    img: img6,
    name: 'UnixCapacity',
    rating: 5.0,
    dataCreated: '03.05.2023',
    text:
      'Всем привет! Сегодня оформил покупку редкого набора СВ. Ещё утром, и уже получил. Как всегда быстро и чётко\n' +
      'сработали ребята)\n' +
      '\n' +
      'Обычно ближе к вечеру открывают паки.'
  }
];

function Reviews() {
  return (
    <MainTemplate className="dashboard profileSettings">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="dashboard-home-body">
          <h2 className="page-heading">
            Отзывы <span className="fs-16 c-grey">(262)</span>
          </h2>

          <div className="row flex-lg-row flex-column-reverse">
            <div className="col-xl-8 col-lg-7 col-12">
              {reviewsItem.map((item, index) => (
                <Wrapper
                  key={RandomKey()}
                  className="d-flex justify-content-start align-items-start flex-sm-row flex-column">
                  <img
                    src={item.img}
                    alt="image"
                    width={40}
                    height={40}
                    className="rounded-circle object-fit-cover me-3"
                  />
                  <div className="w-100">
                    <div className="d-flex justify-content-sm-between justify-content-start align-items-start flex-sm-row flex-column w-100 ">
                      <h4 className="fs-sm-18 fs-16 c-black fw-bold mt-sm-0 mt-2">{item.name}</h4>
                      <div className="d-flex justify-content-sm-end justify-content-between align-items-center w-100">
                        <div className="d-flex justify-content-start align-items-center me-2">
                          <PrintRating rate={item.rating} />
                          <span className="c-black fw-bold fs-sm-16 fs-14 ms-1">{item.rating}</span>
                        </div>
                        <span className="c-grey fs-sm-14 fs-12">{item.dataCreated}</span>
                      </div>
                    </div>
                    <p className="fs-sm-16 fs-14 c-grey mt-2">{item.text}</p>
                  </div>
                </Wrapper>
              ))}
              <div className="d-flex justify-content-center align-items-center mt-40">
                <Pagination count={10} color="primary" className="def-pagination" />
              </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-12">
              <Wrapper>
                <p className="fs-20 c-black fw-bold">Оставить отзыв</p>
                <p className="c-grey fs-sm-16 fs-14">
                  Чтоб оставить отзыв нужно быть зарегистрированным более месяца или продать и
                  купить товар на сумму более 5 000 ₽
                </p>
                <div className="mt-3">
                  <DefButton
                    bg="#2763fe"
                    text={
                      <>
                        <Icons name="shopping-cart-add" width={16} className="icon-white me-2" />
                        Перейти в маркет
                      </>
                    }
                    className="w-100"
                  />
                </div>
              </Wrapper>
            </div>
          </div>

          <DashboardFooter />
        </div>
      </div>
    </MainTemplate>
  );
}

export default Reviews;
