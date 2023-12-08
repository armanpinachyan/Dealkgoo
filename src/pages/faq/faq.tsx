import React, { useState } from 'react';
import './faq.scss';
import MainTemplate from '../../features/main-template/main-template';
import question from '../../assets/icons/question.svg';
import { Accordion } from 'react-bootstrap';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import { Pagination } from '@mui/material';

function Faq() {
  const [status, setStatus] = useState<string>('1');

  function handleChange(e: any) {
    setStatus(e);
  }
  return (
    <MainTemplate className="dashboard ">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="dashboard-home-body">
          <h2 className="page-heading">Частые вопросы</h2>
          <div className="dashboard-home-body-scroll">
            <Accordion className="accordion-dashboard" defaultActiveKey="1" onSelect={handleChange}>
              <Accordion.Item
                className={`accordion-dashboard-item ${
                  status && status === '1' ? 'shadow-opened' : ''
                }`}
                eventKey="1">
                <Accordion.Header className="accordion-btn">
                  <div className="icon">
                    <img src={question} width={16} height={16} alt="queiston" />
                  </div>
                  <span>Как купить товар/услугу?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-body2">
                  Для начала необходимо найти нужный товар: воспользуйтесь «Поиск по сайту» на
                  главной странице в левом верхнем углу. Также конкретные товары/услуги можно найти{' '}
                  <br /> на страницах игр. Далее нажмите на нужный товар, укажите кол-во, которое
                  хотите приобрести, и нажмите «В корзину». <br /> Далее ждем пока продавец в чате
                  сделки подтвердит наличие товара, после оплачиваем покупку..
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={`accordion-dashboard-item ${
                  status && status === '2' ? 'shadow-opened' : ''
                }`}
                eventKey="2">
                <Accordion.Header className="accordion-btn">
                  <div className="icon">
                    <img src={question} width={16} height={16} alt="queiston" />
                  </div>
                  <span>Как обратиться к нам за помощью?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-body2">
                  Для начала необходимо найти нужный товар: воспользуйтесь «Поиск по сайту» на
                  главной странице в левом верхнем углу. Также конкретные товары/услуги можно найти{' '}
                  <br /> на страницах игр. Далее нажмите на нужный товар, укажите кол-во, которое
                  хотите приобрести, и нажмите «В корзину». <br /> Далее ждем пока продавец в чате
                  сделки подтвердит наличие товара, после оплачиваем покупку..
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={`accordion-dashboard-item ${
                  status && status === '3' ? 'shadow-opened' : ''
                }`}
                eventKey="3">
                <Accordion.Header className="accordion-btn">
                  <div className="icon">
                    <img src={question} width={16} height={16} alt="queiston" />
                  </div>
                  <span>С какими играми работаем?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-body2">
                  Для начала необходимо найти нужный товар: воспользуйтесь «Поиск по сайту» на
                  главной странице в левом верхнем углу. Также конкретные товары/услуги можно найти{' '}
                  <br /> на страницах игр. Далее нажмите на нужный товар, укажите кол-во, которое
                  хотите приобрести, и нажмите «В корзину». <br /> Далее ждем пока продавец в чате
                  сделки подтвердит наличие товара, после оплачиваем покупку..
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={`accordion-dashboard-item ${
                  status && status === '7' ? 'shadow-opened' : ''
                }`}
                eventKey="7">
                <Accordion.Header className="accordion-btn">
                  <div className="icon">
                    <img src={question} width={16} height={16} alt="queiston" />
                  </div>
                  <span>Как пополнить баланс?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-body2">
                  Для начала необходимо найти нужный товар: воспользуйтесь «Поиск по сайту» на
                  главной странице в левом верхнем углу. Также конкретные товары/услуги можно найти{' '}
                  <br /> на страницах игр. Далее нажмите на нужный товар, укажите кол-во, которое
                  хотите приобрести, и нажмите «В корзину». <br /> Далее ждем пока продавец в чате
                  сделки подтвердит наличие товара, после оплачиваем покупку..
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={`accordion-dashboard-item ${
                  status && status === '4' ? 'shadow-opened' : ''
                }`}
                eventKey="4">
                <Accordion.Header className="accordion-btn">
                  <div className="icon">
                    <img src={question} width={16} height={16} alt="queiston" />
                  </div>
                  <span>Что делать, если Продавец Вас обманул?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-body2">
                  Для начала необходимо найти нужный товар: воспользуйтесь «Поиск по сайту» на
                  главной странице в левом верхнем углу. Также конкретные товары/услуги можно найти{' '}
                  <br /> на страницах игр. Далее нажмите на нужный товар, укажите кол-во, которое
                  хотите приобрести, и нажмите «В корзину». <br /> Далее ждем пока продавец в чате
                  сделки подтвердит наличие товара, после оплачиваем покупку..
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={`accordion-dashboard-item ${
                  status && status === '5' ? 'shadow-opened' : ''
                }`}
                eventKey="5">
                <Accordion.Header className="accordion-btn">
                  <div className="icon">
                    <img src={question} width={16} height={16} alt="queiston" />
                  </div>
                  <span>Как отменить сделку?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-body2">
                  Для начала необходимо найти нужный товар: воспользуйтесь «Поиск по сайту» на
                  главной странице в левом верхнем углу. Также конкретные товары/услуги можно найти{' '}
                  <br /> на страницах игр. Далее нажмите на нужный товар, укажите кол-во, которое
                  хотите приобрести, и нажмите «В корзину». <br /> Далее ждем пока продавец в чате
                  сделки подтвердит наличие товара, после оплачиваем покупку..
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item
                className={`accordion-dashboard-item ${
                  status && status === '6' ? 'shadow-opened' : ''
                }`}
                eventKey="6">
                <Accordion.Header className="accordion-btn">
                  <div className="icon">
                    <img src={question} width={16} height={16} alt="queiston" />
                  </div>
                  <span>Как снять товар с продажи?</span>
                </Accordion.Header>
                <Accordion.Body className="accordion-body2">
                  Для начала необходимо найти нужный товар: воспользуйтесь «Поиск по сайту» на
                  главной странице в левом верхнем углу. Также конкретные товары/услуги можно найти{' '}
                  <br /> на страницах игр. Далее нажмите на нужный товар, укажите кол-во, которое
                  хотите приобрести, и нажмите «В корзину». <br /> Далее ждем пока продавец в чате
                  сделки подтвердит наличие товара, после оплачиваем покупку..
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <DashboardFooter />
          </div>

          <div className="d-flex justify-content-center align-items-center mt-20">
            <Pagination count={10} color="primary" className="def-pagination" />
          </div>
        </div>
      </div>
    </MainTemplate>
  );
}

export default Faq;
