import React from 'react';
import styled from 'styled-components';
import { GetUserStatus } from '../../utils/helpers';
import user1 from '../../assets/images/my-messages/user1.png';
import { MessageStatus, UserOnlineStatus } from '../../enums/enums';

const UserImage = styled.div<{
  $image: any;
  $status: string;
  $animation: boolean;
  $onlineStatus: boolean;
}>`
  position: relative;
  width: 42px;
  min-width: 42px;
  height: 42px;
  background: url(${({ $image }) => $image}) no-repeat center center;
  background-size: cover;
  border-radius: 50%;
  margin-right: 9px;
  top: 2px;
  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 2px;
    width: 12px;
    height: 12px;
    border-radius: 15px;
    background-color: ${({ $status }) => $status};
    border: 3px solid #ffffff;
    display: ${({ $onlineStatus }) => ($onlineStatus ? 'block' : 'none')};
  }
  &:before {
    content: '';
    position: absolute;
    right: 0;
    bottom: 2px;
    width: 12px;
    height: 12px;
    border-radius: 15px;
    background-color: ${({ $status }) => $status};
    border: 3px solid #ffffff;
    animation: ${({ $animation }) => ($animation ? 'ripple 1.2s infinite ease-in-out' : '')};
    display: ${({ $onlineStatus }) => ($onlineStatus ? 'block' : 'none')};
  }

  @keyframes ripple {
    0% {
      transform: scale(0.8);
      opacity: 1;
    }
    100% {
      transform: scale(2.4);
      opacity: 0;
    }
  }
`;

interface IThisProps {
  user: {
    name: string;
    time: string;
    example: string;
    image: string;
    status: UserOnlineStatus;
    messageStatus: MessageStatus;
  };
  onlineStatus?: boolean;
  className?: string;
}

function UserAvatar({ user, onlineStatus, className }: IThisProps) {
  return (
    <UserImage
      $image={user.image}
      $status={GetUserStatus(user.status)}
      $animation={user.status === UserOnlineStatus.online}
      $onlineStatus={onlineStatus ? onlineStatus : false}
      className={className ? className : ''}
    />
  );
}

export default UserAvatar;
