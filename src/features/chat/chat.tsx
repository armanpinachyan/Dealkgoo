import React, { useState } from 'react';
import styled from 'styled-components';
import Icons from '../icons/icons';
import DefButton from '../def-button/def-button';
import MyDialog from './components/my-dialog';
import { useDispatch, useSelector } from 'react-redux';
import { setChat } from '../../redux/modals';
import ChatUsers from './components/chat-users';
import ChatSupport from './components/chat-support';

const ChatWrapper = styled.div<{ $status: boolean }>`
  width: 500px;
  height: ${({ $status }) => ($status ? '660px' : '0')};
  border-radius: 25px 25px 0 0;
  background-color: #ffffff;
  position: fixed;
  right: 37px;
  bottom: 0;
  padding: ${({ $status }) => ($status ? '20px 20px' : '0 20px')};
  transition: 0.3s;
`;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 19px;
  border-bottom: 1px solid #f3f3f6;
  .go-back {
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: #ffffff;
    border: 1px solid #f3f3f6;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
      border: 1px solid #2763ff;
    }
  }
`;

const CatContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  .CatContent-item {
    width: 0;
    height: 100%;
    transition: 0.3s;
    overflow: hidden;
    opacity: 0;
    transition-delay: 0.3s;
    transition-property: opacity;
    &.active {
      opacity: 1;
      width: 100%;
    }
  }
`;

const activeSteps: number[] = [];

function Chat() {
  const dispatch = useDispatch();
  const chat = useSelector((state: Modals) => state.Modals.chat);
  const [active, setActive] = useState<number>(2);

  function closeChat() {
    dispatch(setChat(false));
  }

  function changeActive(index: number) {
    setActive(index);
    activeSteps.push(index);
  }

  function goToBack() {
    const end = activeSteps.pop();
    setActive(end || 2);
  }

  return (
    <ChatWrapper $status={chat}>
      <Header>
        <div className="go-back" onClick={goToBack}>
          <Icons name="arrow-left" width={16} color="#2763ff" />
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <DefButton
            bg={active === 1 ? '#fff' : '#f3f3f6'}
            text="Чат с поддержкой"
            filter="unset"
            textColor="#212121"
            className="me-2 trans"
            border={active === 1 ? '1px solid #2763ff' : '#0000'}
            onClick={() => changeActive(1)}
          />
          <DefButton
            bg={active === 2 ? '#fff' : '#f3f3f6'}
            text="Мои диалоги"
            filter="unset"
            textColor="#212121"
            className="me-2 trans"
            border={active === 2 ? '1px solid #2763ff' : '1px solid #0000'}
            onClick={() => changeActive(2)}
          />
        </div>
        <Icons
          name="close"
          width={24}
          color="#d6d9ef"
          colorHover="#000"
          className="cursor-pointer"
          onClick={closeChat}
        />
      </Header>
      <CatContent>
        <div className={`CatContent-item ${active === 1 ? 'active' : ''}`}>
          <ChatSupport />
        </div>
        <div className={`CatContent-item ${active === 2 ? 'active' : ''}`}>
          <MyDialog changeIndex={(index) => changeActive(index)} />
        </div>
        <div className={`CatContent-item ${active === 3 ? 'active' : ''}`}>
          <ChatUsers />
        </div>
      </CatContent>
    </ChatWrapper>
  );
}

export default Chat;
