import React, { useState } from 'react';
import Icons from '../icons/icons';
import styled from 'styled-components';

const SendMessageUser = styled.div`
  width: 100%;
  min-height: 50px;
  border-radius: 15px;
  background-color: #ffffff;
  border: 1px solid #f3f3f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 23px;
  margin-top: 29px;
  transition: 0.3s;
  &:hover {
    border: 1px solid #2763ff;
  }
  &.active {
    border: 1px solid #2763ff;
  }
  textarea {
    resize: none;
    width: calc(100% - 76px);
    height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &::placeholder {
      font-size: 16px;
      color: #d2d4df;
      font-weight: 300;
    }
  }
  label {
    cursor: pointer;
  }
`;

function SendMessage() {
  const [active, setActive] = useState<boolean>(false);

  function handleActive() {
    setActive(true);
  }
  function handleDeactivate() {
    setActive(false);
  }

  return (
    <SendMessageUser className={active ? 'active' : ''}>
      <textarea
        placeholder="Вставьте содержимое товара..."
        onFocus={handleActive}
        onBlur={handleDeactivate}
      />
      <label>
        <input type="file" className="d-none" />
        <Icons name="clip" width={18} color="#d6d9ef" />
      </label>
      <Icons name="send" width={20} color="#2763ff" className="cursor-pointer" />
    </SendMessageUser>
  );
}

export default SendMessage;
