import React, { useState } from 'react';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import './profile.scss';
import Icons from '../../features/icons/icons';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import MainTemplate from '../../features/main-template/main-template';
import styled from 'styled-components';
import saveMoney from '../../assets/icons/save-money.png';
import twoX from '../../assets/icons/target.png';
import vip from '../../assets/icons/vip.png';
import personage1 from '../../assets/images/case/logo1.png';
import personage2 from '../../assets/images/case/logo9.png';
import image1 from '../../assets/images/profile/image1.png';
import image2 from '../../assets/images/profile/image2.png';
import image3 from '../../assets/images/profile/image3.png';
import image4 from '../../assets/images/profile/image4.png';
import image5 from '../../assets/images/profile/image5.png';
import { Box, Pagination, Tab, Tabs } from '@mui/material';
import { RandomKey } from '../../utils/helpers';
import PrintRating from '../../features/print-rating/print-rating';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
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

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 25px;
  background-color: #ffffff;
  padding: 31px 21px;
  @media (max-width: 1200px) {
    padding: 20px 12px;
  }
  .new-image {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const Wrapper2 = styled.div`
  width: 100%;
  border-radius: 25px;
  background-color: #ffffff;
  padding: 31px 21px;
  margin-bottom: 19px;
  .new-image {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
  }
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
  @media (max-width: 576px) {
    margin-right: 14px;
    width: 40px;
    height: 40px;
  }
  img {
    width: 24px;
    @media (max-width: 576px) {
      width: 20px;
    }
  }
`;

const bayed = [
  {
    image: image1,
    title: 'BubMotion',
    rating: 5.0,
    data: '08.05.2023',
    text: 'Я очень доволен магазином игр, который я недавно посетил. Здесь я нашел огромный выбор игр для всех платформ, включая последние релизы. Цены были весьма конкурентными, а персонал оказался очень дружелюбным и помог мне выбрать игру, которая мне подходит.',
    answer: []
  },
  {
    image: image2,
    title: 'FeelAppendix',
    rating: 3.0,
    data: '08.09.2023',
    text: 'Сперва была задержка.Затем обратился в онлайн чат с поддержкой и в течении 5-7 минут все выслали.',
    answer: []
  },
  {
    image: image3,
    title: 'PassZest',
    rating: 5.0,
    data: '08.09.2023',
    text: 'Все сделали очень быстро и качественно, плюс ещё и душ накинули вместо 12000 получилось 13500 так ещё и голды накинули с верху плюс персонажей прокачали и снаряжение тоже',
    answer: []
  },
  {
    image: image4,
    title: 'LateFraction',
    rating: 4.5,
    data: '08.09.2023',
    text: (
      <>
        Приветствую, очень крутой сайт, сначала очень переживал потерять аккаунт и банковскую карту.
        Но к счастью всё прошло успешно! Быстро и качественно. <br /> <br /> А также накинули монет,
        и снаряжение! Рекомендую
      </>
    ),
    answer: [
      {
        image: image5,
        title: 'ActPlanner',
        data: '08.09.2023',
        text: 'Благодарим за высокую оценку нашим стараниям! Спасибо за то, что находите время для хороших отзывов, они помогают людям выбрать правильный товар.'
      }
    ]
  }
];

function Profile() {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <MainTemplate className="dashboard profileSettings">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="dashboard-home-body">
          <h2 className="page-heading">Настройки профиля</h2>
          <div className="row">
            <div className="col-xl-3 col-12">
              <div className="row">
                <div className="col-xl-12 col-lg-4 col-12 mb-19">
                  <div className="profileSettings-avatarBlock ">
                    <div className="profileSettings-avatarBlock-img">
                      <div className="profileSettings-avatarBlock-img-edit">
                        <Icons name="edit" width={10} height={10} />
                      </div>
                    </div>
                    <div className="flex-sb-c mt-4">
                      <div>
                        <h4 className="profileSettings-avatarBlock-name">ScopeDogma</h4>
                        <div className="profileSettings-avatarBlock-status">Online </div>
                      </div>
                      <div className="profileSettings-avatarBlock-rating">
                        <Icons name="star" width={16} height={16} />
                        5.0
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-12 col-lg-4 col-12 mb-19">
                  <Wrapper>
                    <div className="d-flex justify-content-between align-items-center mb-29">
                      <span className="fs-sm-20 fs-17 fw-bold c-black">Достижения</span>
                      <span className="fs-sm-16 fs-14 c-grey text-end cursor-pointer">
                        Показать всё
                      </span>
                    </div>

                    <div className="d-flex justify-content-start align-items-start mb-19">
                      <Image>
                        <img src={saveMoney} alt="icon" />
                      </Image>
                      <div>
                        <p className="mb-0 fs-sm-18 fs-16 c-black fw-bold">Продавец</p>
                        <p className="mb-0 fs-sm-16 fs-14 c-grey">Заработать 10 000 ₽</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-start mb-19">
                      <Image>
                        <img src={twoX} alt="icon" />
                      </Image>
                      <div>
                        <p className="mb-0 fs-sm-18 fs-16  c-black fw-bold">Партнер</p>
                        <p className="mb-0 fs-sm-16 fs-14 c-grey">Пригласить 100 друзей</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-start">
                      <Image>
                        <img src={vip} alt="icon" />
                      </Image>
                      <div>
                        <p className="mb-0 fs-sm-18 fs-16  c-black fw-bold">Топ юзер</p>
                        <p className="mb-0 fs-sm-16 fs-14 c-grey">Лучшие пользователи сайта</p>
                      </div>
                    </div>
                  </Wrapper>
                </div>
                <div className="col-xl-12 col-lg-4 col-12 mb-19">
                  <Wrapper>
                    <div className="d-flex justify-content-between align-items-center mb-29">
                      <span className="fs-sm-20 fs-17  fw-bold c-black">В продаже</span>
                      <span className="fs-sm-16 fs-14 c-grey text-end cursor-pointer">
                        Показать всё
                      </span>
                    </div>

                    <div className="d-flex justify-content-start align-items-start mb-19">
                      <Image>
                        <img src={personage1} alt="icon" />
                      </Image>
                      <div>
                        <p className="mb-0 fs-sm-18 fs-16 c-black fw-bold">
                          Штурмовик Элитного отряда
                        </p>
                        <p className="mb-0 fs-sm-16 fs-14 c-grey">115 ₽</p>
                      </div>
                    </div>
                    <div className="d-flex justify-content-start align-items-start mb-19">
                      <Image>
                        <img src={personage2} alt="icon" />
                      </Image>
                      <div>
                        <p className="mb-0 fs-sm-18 fs-16 c-black fw-bold">Золотой HArms CQR</p>
                        <p className="mb-0 fs-sm-16 fs-14  c-grey ">378 ₽</p>
                      </div>
                    </div>
                  </Wrapper>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-12">
              <Wrapper2>
                <div className="d-flex justify-content-start align-items-center border-bottom pb-10">
                  <div className="fs-sm-48 fs-32 fw-bold mr-19 ">4.8</div>
                  <div>
                    <div className="d-flex justify-content-start align-items-start">
                      <PrintRating rate={5} />
                    </div>
                    <p className="mb-0 fs-sm-16 fs-14 c-black">
                      12 оценок • <span className="c-blue cursor-pointer">6 отзывов</span>
                    </p>
                  </div>
                </div>
                <div className="d-flex justify-content-start align-items-center pt-19 profile-s-sc">
                  <div className="mr-50">
                    <p className="fs-sm-16 fs-14 c-grey mb-0">Имя</p>
                    <p className="fs-sm-18 fs-16 c-black fw-bold mb-0">Никита</p>
                  </div>
                  <div className="mr-50">
                    <p className="fs-sm-16 fs-14 c-grey mb-0">Группа</p>
                    <p className="fs-sm-18 fs-16 c-black fw-bold mb-0 ">Легенда города</p>
                  </div>
                  <div className="mr-40">
                    <p className="fs-sm-16 fs-14 c-grey mb-0">Лайков</p>
                    <p className="fs-sm-18 fs-16 c-black fw-bold mb-0">452</p>
                  </div>
                  <div className="mr-50">
                    <p className="fs-sm-16 fs-14 c-grey mb-0">Тем на форуме</p>
                    <p className="fs-sm-18 fs-16 c-black fw-bold mb-0">2 938</p>
                  </div>
                  <div className="mr-50">
                    <p className="fs-sm-16 fs-14 c-grey mb-0">Покупок</p>
                    <p className="fs-sm-18 fs-16 c-black fw-bold mb-0">344</p>
                  </div>
                  <div className="mr-50">
                    <p className="fs-sm-16 fs-14 c-grey mb-0">Продаж</p>
                    <p className="fs-sm-18 fs-16 c-black fw-bold mb-0">102</p>
                  </div>
                  <div className="mr-50">
                    <p className="fs-sm-16 fs-14 c-grey mb-0">Дата регистрации</p>
                    <p className="fs-sm-18 fs-16 c-black fw-bold mb-0">20.08.2023</p>
                  </div>
                </div>
              </Wrapper2>

              <Box sx={{ width: '100%' }} className="Table">
                <Box
                  className="Table-top position-relative"
                  sx={{ borderBottom: 0, borderColor: 'divider' }}>
                  <Tabs className="Table-item" value={value} onChange={handleChange}>
                    <Tab label="Отзывы о продажах" className="Table-item-tab" />
                    <Tab label="Созданные темы на форуме" className="Table-item-tab" />
                    <Tab label="Список покупок" className="Table-item-tab" />
                  </Tabs>
                </Box>

                <div className="Table-inner">
                  <CustomTabPanel key={RandomKey()} value={value} index={0}>
                    {bayed.map((item) => (
                      <Wrapper key={RandomKey()} className="mt-19">
                        <div className="d-flex justify-content-start align-items-start flex-sm-row flex-column">
                          <img src={item.image} alt="image" className="new-image new-image-2 " />
                          <div className="w-100">
                            <div className="d-flex justify-content-sm-between justify-content-start align-items-sm-center align-items-start w-100 mb-3 flex-sm-row flex-column">
                              <span className="fs-sm-18 fs-16 mb-sm-0 mb-2 c-black fw-bold">
                                {item.title}
                              </span>
                              <div className="d-flex justify-content-sm-end justify-content-between align-items-sm-center align-items-start w-100">
                                <div className="d-flex justify-content-end align-items-center mr-19">
                                  <PrintRating rate={item.rating} className="mr-5" />
                                  <span className="fs-sm-16 fs-14 c-black fw-bold">
                                    {item.rating}
                                  </span>
                                </div>
                                <span className="fs-sm-14 fs-12 c-grey">{item.data}</span>
                              </div>
                            </div>
                            <div>
                              <p className="mb-0 fs-sm-16 fs-13 c-grey">{item.text}</p>
                              {item.answer.map((answer: any) => (
                                <div
                                  key={RandomKey()}
                                  className="d-flex justify-content-start align-items-start mt-4 flex-sm-row flex-column border-left-3 pl-19">
                                  <img
                                    src={answer.image}
                                    alt="image"
                                    className="new-image new-image-2"
                                  />
                                  <div className="w-100">
                                    <div className="d-flex justify-content-between align-items-center w-100 mb-3">
                                      <span className="fs-sm-18 fs-16 c-black fw-bold">
                                        {answer.title}
                                      </span>
                                      <div className="d-flex justify-content-end align-items-center w-100">
                                        <span className="fs-sm-14 fs-12 c-grey">{answer.data}</span>
                                      </div>
                                    </div>
                                    <div>
                                      <p className="mb-0 fs-sm-16 fs-13 c-grey">{answer.text}</p>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Wrapper>
                    ))}
                  </CustomTabPanel>
                  <CustomTabPanel key={RandomKey()} value={value} index={1}>
                    2
                  </CustomTabPanel>
                  <CustomTabPanel key={RandomKey()} value={value} index={2}>
                    3
                  </CustomTabPanel>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-30">
                  <Pagination count={10} color="primary" className="def-pagination" />
                </div>
              </Box>
              <DashboardFooter />
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default Profile;
