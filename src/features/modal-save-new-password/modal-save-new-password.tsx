import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalSaveNewPassword } from '../../redux/modals';
import { Modal } from 'react-bootstrap';
import Icons from '../icons/icons';
import DefInput from '../def-input/def-input';
import DefButton from '../def-button/def-button';
import { setAlertError } from '../../utils/helpers';
import { AlertSiteTypes } from '../../enums/enums';

function ModalSaveNewPassword() {
  const dispatch = useDispatch();
  const show = useSelector((state: Modals) => state.Modals.modalSaveNewPassword);

  function closeModal() {
    dispatch(setModalSaveNewPassword(false));
  }

  function savePassword() {
    setAlertError(AlertSiteTypes.success, 'Ваш пароль успешно сохранена');
    setTimeout(closeModal, 2000);
  }

  return (
    <Modal show={show} onHide={closeModal} className="def-modal">
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <p className="fs-24 c-black fw-bold mt-2">Введите новый пароль</p>
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
          <DefInput placeholder="Ввести новый пароль" type="password" />
        </div>
        <div className="mb-3">
          <DefInput placeholder="Введите пароль еще раз" type="password" />
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
            onClick={savePassword}
          />
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default ModalSaveNewPassword;
