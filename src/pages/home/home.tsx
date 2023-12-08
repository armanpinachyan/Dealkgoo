import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/home-logo.png';
import HeaderLogo from '../../assets/images/home-bg.png';
import vkontakte from '../../assets/icons/vkontakte.png';
import './home.scss';
import styled from 'styled-components';
import Icons from '../../features/icons/icons';
import { RandomKey } from '../../utils/helpers';
import DefButton from '../../features/def-button/def-button';
import { Fade } from 'react-awesome-reveal';
import ModalLogin from '../../features/modal-login/modal-login';
import ModalRegister from '../../features/modal-register/modal-register';
import { useDispatch } from 'react-redux';
import { setModalLogin } from '../../redux/modals';
import ResetPasswordEmail from '../../features/modal-reset-password-email/reset-password-email';
import ModalSaveNewPassword from '../../features/modal-save-new-password/modal-save-new-password';
import ModalCreateUsername from '../../features/modal-create-username/modal-create-username';
import vk from '../../assets/images/home-footer-social/VK.png';
import fb from '../../assets/images/home-footer-social/FB.png';
import tw from '../../assets/images/home-footer-social/TW.png';
import ok from '../../assets/images/home-footer-social/OK.png';
import yt from '../../assets/images/home-footer-social/YT.png';
import ig from '../../assets/images/home-footer-social/IG.png';

const Header = styled.header`
  width: 100%;
  height: auto;
  background: url(${HeaderLogo}) no-repeat center top;
  background-size: cover;
  position: relative;

  .menuItem {
    font-size: 18px;
    color: #ffffff;
    margin-right: 29px;
    transition: 0.3s;
    &:last-child {
      margin-right: 0;
    }
    svg {
      margin-right: 11px;
    }
    &:hover {
      color: #2763fe;
      svg {
        fill: #2763fe;
      }
    }
  }
  .container {
    height: auto;
    position: relative;
    width: 100%;
    padding-bottom: 60px;
    .OurMe {
      margin-top: 7vh;
    }
  }
`;

const VkIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  filter: drop-shadow(0px 5px 12.5px rgba(39, 99, 254, 0.3));
  background-color: transparent;
  border: 2px solid #4169e1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-right: 19px;
`;

const Title = styled.h1`
  font-size: 100px;
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 5px;
  margin-top: 100px;
`;

const SubTitle = styled.h2`
  font-size: 30px;
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 15px;
`;

const Text = styled.h3`
  font-size: 18px;
  color: #cfd1dd;
  margin-bottom: 59px;
`;

const OurMe = styled.div<{ $iconWidth: number }>`
  width: 100%;
  height: 160px;
  border-radius: 25px;
  filter: drop-shadow(0px 5px 12.5px rgba(5, 11, 26, 0.3));
  background-color: #ffffff70;
  display: flex;
  justify-content: start;
  align-items: center;
  backdrop-filter: blur(7px);
  padding-left: 31px;
  padding-right: 31px;
  svg {
    margin-right: 31px;
    min-width: ${({ $iconWidth }) => $iconWidth}px;
  }

  .title {
    font-size: 20px;
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .subtitle {
    font-size: 16px;
    color: #cfd1dd;
    font-weight: 300;
    margin-bottom: 0;
  }
`;

const menuItems = [
  {
    name: 'Главная',
    url: '#',
    icon: 'home'
  },
  {
    name: 'Каталог',
    url: '#',
    icon: 'catalog'
  },
  {
    name: 'Топ юзеров',
    url: '#',
    icon: 'star-border'
  },
  {
    name: 'Отзывы',
    url: '#',
    icon: 'comments_ico'
  },
  {
    name: 'Гарантии',
    url: '#',
    icon: 'secure'
  },
  {
    name: 'Случайный предмет',
    url: '#',
    icon: 'change'
  },
  {
    name: 'Форум',
    url: '#',
    icon: 'forum'
  }
];

function Home() {
  const dispatch = useDispatch();

  function openModalLogin() {
    dispatch(setModalLogin(true));
  }

  return (
    <>
      <Header>
        <div className="container d-flex justify-content-between align-items-start flex-column">
          <div className="d-flex justify-content-between align-items-center pt-35 w-100">
            <Link to="#">
              <img src={Logo} alt="Home logo" />
            </Link>

            <div className="d-flex justify-content-start align-items-center">
              {menuItems.map((item) => (
                <Link key={RandomKey()} to={item.url} className="menuItem">
                  <Icons name={item.icon} width={16} color="#fff" />
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="d-flex justify-content-end align-items-center">
              <VkIcon>
                <img src={vkontakte} alt="vk icon" />
              </VkIcon>
              <DefButton
                bg="#2763fe"
                text="Войти"
                filter="drop-shadow(0px 5px 12.5px rgba(39,99,254,0.3))"
                onClick={openModalLogin}
              />
            </div>
          </div>
          <div>
            <Fade direction="left" duration={3000}>
              <Title>DealkGo.com</Title>
            </Fade>
            <Fade direction="left" duration={2000}>
              <SubTitle>Совершайте безопасную сделку сейчас!</SubTitle>
            </Fade>
            <Fade direction="left" duration={1500}>
              <Text>
                Присоединяйтесь к нам прямо сейчас, и получите 15 бонусов на счёт при первом
                пополении своего баланса.
              </Text>
            </Fade>
            <div>
              <Fade duration={2000} delay={2000}>
                <DefButton
                  bg="#2763fe"
                  filter="drop-shadow(0px 5px 12.5px rgba(39,99,254,0.3))"
                  text="Присоединиться →"
                  height={51}
                />
              </Fade>
            </div>
          </div>

          <div>
            <div className="row OurMe">
              <div className="col-4">
                <Fade duration={1500} delay={3000} style={{ backdropFilter: 'blur(7px)' }}>
                  <OurMe $iconWidth={54}>
                    <Icons name="secure" width={54} color="#fff" />
                    <div>
                      <h4 className="title">Гарантия безопасной сделки</h4>
                      <p className="subtitle">А также удобная система реферальных бонусов</p>
                    </div>
                  </OurMe>
                </Fade>
              </div>
              <div className="col-4">
                <Fade duration={1500} delay={4000} style={{ backdropFilter: 'blur(7px)' }}>
                  <OurMe $iconWidth={64}>
                    <Icons name="prize" width={64} color="#fff" />
                    <div>
                      <h4 className="title">Розыгрыши</h4>
                      <p className="subtitle">
                        Ежедневно бесплатные розыгрыши для наших пользователей
                      </p>
                    </div>
                  </OurMe>
                </Fade>
              </div>
              <div className="col-4">
                <Fade duration={1500} delay={5000} style={{ backdropFilter: 'blur(7px)' }}>
                  <OurMe $iconWidth={64}>
                    <Icons name="edu" width={64} color="#fff" />
                    <div>
                      <h4 className="title">Полезная информация</h4>
                      <p className="subtitle">На форуме и бронирование запросов на товары</p>
                    </div>
                  </OurMe>
                </Fade>
              </div>
            </div>
            <div className="home-footer">
              <p className="text">© 2023, Все права защищены</p>
              <p className="text">DealkGo.com — Маркетплейс по продажам цифровых товаров. </p>
              <div className="icons">
                <div className="d-flex justify-content-start align-items-center mt-4 mb-3">
                  <Link to="#">
                    <img src={vk} alt="soc icon" className="me-2" />
                  </Link>
                  <Link to="#">
                    <img src={fb} alt="soc icon" className="me-2" />
                  </Link>
                  <Link to="#">
                    <img src={tw} alt="soc icon" className="me-2" />
                  </Link>
                  <Link to="#">
                    <img src={ok} alt="soc icon" className="me-2" />
                  </Link>
                  <Link to="#">
                    <img src={yt} alt="soc icon" className="me-2" />
                  </Link>
                  <Link to="#">
                    <img src={ig} alt="soc icon" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Header>
      <ModalLogin />
      <ModalRegister />
      <ResetPasswordEmail />
      <ModalSaveNewPassword />
      <ModalCreateUsername />
    </>
  );
}

export default Home;
