import React from 'react';
import { Modal } from 'react-bootstrap';
import Icons from '../icons/icons';
import DefInput from '../def-input/def-input';
import { Checkbox } from '@mui/material';
import { Link } from 'react-router-dom';
import DefButton from '../def-button/def-button';
import mail from '../../assets/icons/mail.png';
import vkIcon from '../../assets/icons/vkontakte.png';
import google from '../../assets/icons/google.png';
import { useDispatch, useSelector } from 'react-redux';
import {
  setModalLogin,
  setModalRegister,
  setModalSaveNewPassword,
  setResetPasswordEmail
} from '../../redux/modals';

function ResetPasswordEmail() {
  const dispatch = useDispatch();
  const show = useSelector((state: Modals) => state.Modals.resetPasswordEmail);

  function closeModal() {
    dispatch(setResetPasswordEmail(false));
  }

  function openSavePasswordModal() {
    closeModal();
    dispatch(setModalSaveNewPassword(true));
  }

  return (
    <Modal show={show} onHide={closeModal} className="def-modal">
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <p className="fs-24 c-black fw-bold mt-2">Восстановление пароля</p>
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
          <DefInput placeholder="Введите эл.почту от аккаунта" type="email" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <DefButton
            bg="#93d43f"
            text="Сохранить"
            filter="drop-shadow(0px 5px 12.5px rgba(147,212,63,0.3))"
            height={50}
            width={171}
            paddingR={10}
            paddingL={10}
            borderRadius={20}
            className="w-100"
            onClick={openSavePasswordModal}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ResetPasswordEmail;
