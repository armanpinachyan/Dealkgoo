import React from 'react';
import { Modal } from 'react-bootstrap';
import Icons from '../icons/icons';
import DefInput from '../def-input/def-input';
import { Checkbox } from '@mui/material';
import DefButton from '../def-button/def-button';
import vkIcon from '../../assets/icons/vkontakte.png';
import google from '../../assets/icons/google.png';
import mail from '../../assets/icons/mail.png';
import styled from 'styled-components';
import { setModalLogin, setModalRegister, setResetPasswordEmail } from '../../redux/modals';
import { useDispatch, useSelector } from 'react-redux';

const Border = styled.div`
  width: 100%;
  height: 1px;
  background-color: #f3f3f6;
`;

function ModalLogin() {
  const dispatch = useDispatch();
  const show = useSelector((state: Modals) => state.Modals.modalLogin);

  function openModalRegister() {
    dispatch(setModalRegister(true));
    closeModal();
  }
  function closeModal() {
    dispatch(setModalLogin(false));
  }

  function openModalResetPassword() {
    dispatch(setModalLogin(false));
    dispatch(setResetPasswordEmail(true));
  }

  return (
    <Modal show={show} onHide={closeModal} className="def-modal">
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-start">
          <p className="fs-24 c-black fw-bold mt-2">Авторизация</p>
          <Icons
            name="close"
            width={24}
            color="#d6d9ef"
            colorHover="#000"
            className="cursor-pointer"
            onClick={closeModal}
          />
        </div>
        <div className="mb-3">
          <DefInput placeholder="Имя пользователя" />
        </div>
        <div className="mb-3">
          <DefInput placeholder="Пароль" type="password" />
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <label className="fs-16 c-grey d-flex justify-content-start align-items-center">
            <Checkbox
              defaultChecked
              sx={{
                color: '#2763fe'
              }}
            />
            Запомнить меня
          </label>
          <span onClick={openModalResetPassword} className="fs-16 c-grey cursor-pointer">
            Забыли пароль?
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <DefButton
            bg="#2763fe"
            text="Войти"
            filter="drop-shadow(0px 5px 12.5px rgba(39,99,254,0.3))"
            height={50}
            width={171}
            paddingR={10}
            paddingL={10}
            borderRadius={20}
            className="me-3"
          />
          <div className="d-flex justify-content-end align-items-center">
            <DefButton
              bg="#ff9e00"
              text={<img src={mail} alt="mail vk" />}
              filter="drop-shadow(0px 5px 12.5px rgba(255,158,0,0.3))"
              height={50}
              width={50}
              paddingL={10}
              paddingR={10}
              borderRadius={100}
            />
            <DefButton
              bg="#2763fe"
              text={<img src={vkIcon} alt="icon vk" />}
              filter="drop-shadow(0px 5px 12.5px rgba(65,105,225,0.3))"
              height={50}
              width={50}
              paddingL={10}
              paddingR={10}
              borderRadius={100}
              className="me-1 ms-1"
            />
            <DefButton
              bg="#ea4335"
              text={<img src={google} alt="google vk" />}
              filter="drop-shadow(0px 5px 12.5px rgba(234,67,53,0.3))"
              height={50}
              width={50}
              paddingL={10}
              paddingR={10}
              borderRadius={100}
            />
          </div>
        </div>
        <Border className="mt-4" />
        <div className="text-center mt-4">
          Еще нет аккаунта?{' '}
          <span className="c-blue cursor-pointer" onClick={openModalRegister}>
            Создать аккаунт
          </span>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalLogin;
