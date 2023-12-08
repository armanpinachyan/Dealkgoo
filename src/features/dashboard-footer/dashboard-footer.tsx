import React from 'react';
import up_arrow from '../../assets/icons/uparrow.svg';
import onlineChat from '../../assets/icons/onlinechat.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setChat } from '../../redux/modals';

function DashboardFooter() {
  const dispatch = useDispatch();
  const chat = useSelector((state: Modals) => state.Modals.chat);

  function openChat() {
    dispatch(setChat(true));
  }

  function windowTop() {
    const body = document.querySelector('.MainTemplate-content');
    body?.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  return (
    <div className="dashboard-home-footer mb-4">
      <div className="icon-top" onClick={windowTop}>
        <img src={up_arrow} width={24} height={24} alt="up" />
      </div>
      <div className="icon-online-chat" style={{ opacity: chat ? 0 : 1 }} onClick={openChat}>
        <img src={onlineChat} width={24} height={24} alt="up" />
      </div>
    </div>
  );
}

export default DashboardFooter;
