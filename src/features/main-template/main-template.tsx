import React from 'react';
import Menu from '../menu/menu';
import './main-template.scss';
import Chat from '../chat/chat';

function MainTemplate({ children, className = '' }: MainTemplate) {
  return (
    <>
      <div className={`MainTemplate ${className}`}>
        <Menu />

        <div className="MainTemplate-content">{children}</div>
        <Chat />
      </div>
    </>
  );
}

export default MainTemplate;
