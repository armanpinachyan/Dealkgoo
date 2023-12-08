import React from 'react';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import MainTemplate from '../../features/main-template/main-template';
import ChatSellerMessenger from './components/chat-seller-mesanger';
import Seller from './components/seller';

function ChatSeller() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="dashboard-home-body">
          <h2 className="page-heading">Чат с продавцом</h2>
          <div className="row">
            <div className="col-3">
              <Seller />
            </div>
            <div className="col-9">
              <ChatSellerMessenger />
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default ChatSeller;
