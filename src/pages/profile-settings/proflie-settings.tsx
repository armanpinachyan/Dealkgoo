import React from 'react';
import DashboardNavbar from '../../features/dashboard-navbar/dashboard-navbar';
import MainTemplate from '../../features/main-template/main-template';
import DashboardFooter from '../../features/dashboard-footer/dashboard-footer';
import './proflie-settings.scss';
import Icons from '../../features/icons/icons';
import DefaultInput from '../../features/default-input/default-input';
import DefSwitch from '../../features/def-switch/def-switch';
import DefButton from '../../features/def-button/def-button';

function ProfileSettings() {
  return (
    <MainTemplate className="dashboard profileSettings">
      <div className="dashboard-home">
        <DashboardNavbar />
        <div className="dashboard-home-body">
          <h2 className="page-heading">Настройки профиля</h2>
          <div className="row">
            <div className="col-xl-3 col-lg-5 col-12 mb-lg-0 mb-4">
              <div className="profileSettings-avatarBlock">
                <div className="profileSettings-avatarBlock-img">
                  <div className="profileSettings-avatarBlock-img-edit">
                    <Icons name="edit" width={10} height={10} />
                  </div>
                </div>
                <div className="flex-sb-c mt-4">
                  <div>
                    <h4 className="profileSettings-avatarBlock-name">ScopeDogma</h4>
                    <div className="profileSettings-avatarBlock-status">Online </div>
                  </div>
                  <div className="profileSettings-avatarBlock-rating">
                    <Icons name="star" width={16} height={16} />
                    5.0
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-7 col-12">
              <div className="profileSettings-info">
                <h4 className="profileSettings-info-title">Информация</h4>
                <div className="row">
                  <div className="col-xl-6 mb-xl-0 mb-4">
                    <DefaultInput title="Имя пользователя" placeholder="ScopeDogma" />
                  </div>
                  <div className="col-xl-6 mb-4">
                    <DefaultInput
                      title="E-mail адрес"
                      type="email"
                      disabled
                      placeholder="info@dealkgo.com"
                      icon={
                        <Icons
                          className="def-input-icon icon-blue"
                          name="edit"
                          width={16}
                          height={16}
                        />
                      }
                    />
                  </div>
                  <div className="col-xl-6 mb-4">
                    <DefaultInput
                      title="Пароль"
                      type="password"
                      disabled
                      placeholder="••••••••••••••••••"
                      icon={
                        <Icons
                          className="def-input-icon icon-blue"
                          name="edit"
                          width={16}
                          height={16}
                        />
                      }
                    />
                  </div>
                  <div className="col-xl-6 mb-4">
                    <DefaultInput
                      title="Секретное слово"
                      type="text"
                      disabled
                      placeholder="ug••••••••••••12"
                      icon={
                        <Icons
                          className="def-input-icon icon-blue"
                          name="edit"
                          width={16}
                          height={16}
                        />
                      }
                    />
                  </div>
                </div>
                <h4 className="profileSettings-info-title">Уведомления</h4>

                <div className="row mb-4">
                  <div className="col-sm-6 col-12 mb-sm-0 mb-4">
                    <p className="fs-sm-16 fs-14 c-black fw-bold">Рассылка на почту</p>
                    <div className="fs-sm-16 fs-14  c-grey d-flex justify-content-start align-items-center">
                      <DefSwitch />
                      <span className="ms-2">Включено</span>
                    </div>
                  </div>
                  <div className="col-sm-6 col-12">
                    <p className="fs-sm-16 fs-14  c-black fw-bold">Звуки уведомления</p>
                    <div className="fs-sm-16 fs-14  c-grey d-flex justify-content-start align-items-center">
                      <DefSwitch />
                      <span className="ms-2">Включено</span>
                    </div>
                  </div>
                </div>

                <hr />

                <div className="mt-sm-5 mt-4">
                  <DefButton
                    text="Сохранить изменения"
                    bg="#2763ff"
                    filter="drop-shadow(0px 5px 12.5px rgba(39,99,255,0.3))"
                  />
                </div>
              </div>
            </div>
          </div>
          <DashboardFooter />
        </div>
      </div>
    </MainTemplate>
  );
}

export default ProfileSettings;
