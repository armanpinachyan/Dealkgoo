import React from 'react';
import './purchases-sales.scss';
import DefaultTabs from '../../features/default-tabs/default-tabs';
import MainTemplate from '../../features/main-template/main-template';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import PurchasesSalesItem from './component/purchases-sales-item';
import { Pagination } from '@mui/material';

const tabContents = [
  {
    name: 'Мои покупки',
    body: <PurchasesSalesItem />
  },
  {
    name: 'Мои продажи',
    body: 'Мои продажи'
  }
];

function PurchasesSales() {
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="purchases-sales">
          <h2 className="page-heading">Покупки и продажи</h2>
          <DefaultTabs tabContents={tabContents} />
        </div>
        <div className="d-flex justify-content-center align-items-center mt-40">
          <Pagination count={10} color="primary" className="def-pagination" />
        </div>
        <DashboardFooter />
      </div>
    </MainTemplate>
  );
}

export default PurchasesSales;
