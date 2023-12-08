import React from 'react';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import MainTemplate from '../../features/main-template/main-template';
import MessageBlockChat from './componsnts/message-block-chat';
import Costumer from './componsnts/costumer';

function ChatCustomer() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="dashboard-home-body">
          <h2 className="page-heading">Чат с заказчиком</h2>
          <div className="row">
            <div className="col-3">
              <Costumer />
            </div>
            <div className="col-9">
              <MessageBlockChat />
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default ChatCustomer;
