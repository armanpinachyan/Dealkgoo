import React from 'react';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import MainTemplate from '../../features/main-template/main-template';
import Users from './componenets/users';
import MessageBlock from './componenets/message-block';
import Deal from './componenets/deal';

function MyMessages() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="dashboard-home-body">
          <h2 className="page-heading">Мои сообщения</h2>
          <div className="row">
            <div className="col-12 col-sm-6 col-lg-3">
              <Users />
            </div>
            <div className="col-6">
              <MessageBlock />
            </div>
            <div className="col-3">
              <Deal />
            </div>
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default MyMessages;
