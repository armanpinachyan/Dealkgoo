import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setModalCreateUsername } from '../../redux/modals';
import { setAlertError } from '../../utils/helpers';
import { AlertSiteTypes } from '../../enums/enums';
import { Modal } from 'react-bootstrap';
import Icons from '../icons/icons';
import DefInput from '../def-input/def-input';
import DefButton from '../def-button/def-button';

function ModalCreateUsername() {
  const dispatch = useDispatch();
  const show = useSelector((state: Modals) => state.Modals.modalCreateUsername);

  function closeModal() {
    dispatch(setModalCreateUsername(false));
  }

  function savePassword() {
    setAlertError(AlertSiteTypes.success, 'Спасибо за Вашу регистрацию');
    setTimeout(closeModal, 2000);
  }

  return (
    <Modal show={show} onHide={closeModal} className="def-modal">
      <Modal.Body>
        <div className="d-flex justify-content-between align-items-start mb-2">
          <p className="fs-24 c-black fw-bold mt-2">Придумайте никнейм</p>
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
          <DefInput placeholder="Введите желаемый никнейм" />
        </div>
        <div className="mb-3">
          <DefInput placeholder="Секретное слово (мин 8 символов)" />
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

export default ModalCreateUsername;
