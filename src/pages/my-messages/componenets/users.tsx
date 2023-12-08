import React from 'react';
import styled from 'styled-components';
import user1 from '../../../assets/images/my-messages/user1.png';
import user2 from '../../../assets/images/my-messages/user2.png';
import user3 from '../../../assets/images/my-messages/user3.png';
import user4 from '../../../assets/images/my-messages/user4.png';
import user5 from '../../../assets/images/my-messages/user5.png';
import user6 from '../../../assets/images/my-messages/user6.png';
import user7 from '../../../assets/images/my-messages/user7.png';
import { GetUserMessageStatus, GetUserStatus, RandomKey } from '../../../utils/helpers';
import { MessageStatus, UserOnlineStatus } from '../../../enums/enums';
import Icons from '../../../features/icons/icons';
import { Fade } from 'react-awesome-reveal';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import UserAvatar from '../../../features/user-avatar/user-avatar';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 230px);
  border-radius: 25px;
  background-color: #ffffff;
  padding: 34px 0;
  overflow: hidden;
  .Wrapper-header {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
`;

const MessageCount = styled.span`
  width: 30px;
  height: 16px;
  border-radius: 8px;
  background-color: #2763ff;
  font-size: 12px;
  color: #ffffff;
  text-align: center;
`;

const User = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-content: center;
  padding: 19px 0 19px 20px;
  position: relative;
  transition: 0.3s;
  &:before {
    content: '';
    width: calc(100% - 20px);
    height: 1px;
    position: absolute;
    right: 0;
    top: 0;
    background: #f3f3f6;
  }
  &:hover {
    background-color: #f8f9fc;
  }
  &.active {
    background-color: #f8f9fc;
    border: 0;
  }
`;

const Messages = styled.div`
  height: calc(100% - 30px);
  overflow-y: auto;
  overflow-x: hidden;
`;

const UserMessageExample = styled.p`
  margin-bottom: 0;
  font-size: 14px;
  color: #babcc7;
  font-weight: 300;
  white-space: nowrap;
  width: calc(100% - 35px);
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserName = styled.span`
  font-size: 18px;
  color: #212121;
  font-weight: bold;
  width: calc(100% - 35px);
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const UserInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: calc(100% - 51px);
`;

const UserMessageExampleParent = styled.div`
  width: calc(100% - 20px);
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

const UserMessageStatus = styled.span<{ $status: string }>`
  display: flex;
  justify-content: end;
  align-items: center;
  svg {
    * {
      fill: ${({ $status }) => $status};
    }
    &:nth-of-type(1) {
      position: relative;
      right: -5px;
    }
  }
`;

const users = [
  {
    name: 'FunSense',
    time: '16:35',
    example: 'Спасибо, что используете мои с...',
    image: user1,
    status: UserOnlineStatus.online,
    messageStatus: MessageStatus.read
  },
  {
    name: 'GuiltyClip',
    time: '16:35',
    example: 'Спасибо, что используете мои с...',
    image: user2,
    status: UserOnlineStatus.offline,
    messageStatus: MessageStatus.noRead
  },
  {
    name: 'MeltingGrin',
    time: '16:35',
    example: 'Спасибо, что используете мои с...',
    image: user3,
    status: UserOnlineStatus.offline,
    messageStatus: MessageStatus.read
  },
  {
    name: 'WillowDisarray',
    time: '16:35',
    example: 'Спасибо, что используете мои с...',
    image: user4,
    status: UserOnlineStatus.offline,
    messageStatus: MessageStatus.read
  },
  {
    name: 'UpholdSail',
    time: '16:35',
    example: 'Спасибо, что используете мои с...',
    image: user5,
    status: UserOnlineStatus.offline,
    messageStatus: MessageStatus.noRead
  },
  {
    name: 'AntennaToxicity',
    time: '16:35',
    example: 'Спасибо, что используете мои с...',
    image: user6,
    status: UserOnlineStatus.offline,
    messageStatus: MessageStatus.noRead
  },
  {
    name: 'PolarActress',
    time: '16:35',
    example: 'Спасибо, что используете мои с...',
    image: user7,
    status: UserOnlineStatus.online,
    messageStatus: MessageStatus.noRead
  },
  {
    name: 'UpholdSail',
    time: '16:35',
    example: 'Спасибо, что используете мои с...',
    image: user5,
    status: UserOnlineStatus.offline,
    messageStatus: MessageStatus.noRead
  },
  {
    name: 'AntennaToxicity',
    time: '16:35',
    example: 'Спасибо, что используете мои с...',
    image: user6,
    status: UserOnlineStatus.online,
    messageStatus: MessageStatus.noRead
  }
];

function Users() {
  return (
    <Wrapper>
      <div className="Wrapper-header">
        <p className="mb-0 fs-18 c-black">
          Сообщения <span className="c-grey">(409)</span>
        </p>
        <MessageCount>102</MessageCount>
      </div>
      <Messages>
        {users.map((user, index) => (
          <Fade
            key={RandomKey()}
            direction="right"
            duration={800}
            delay={index * 30}
            triggerOnce={true}>
            <User className={index === 1 ? 'active' : ''}>
              <UserAvatar user={user} onlineStatus />
              <div className="w-100">
                <UserInfoBlock>
                  <UserName>{user.name}</UserName>
                  <span className="c-grey fs-14">{user.time}</span>
                </UserInfoBlock>
                <UserMessageExampleParent>
                  <UserMessageExample>{user.example}</UserMessageExample>
                  <UserMessageStatus $status={GetUserMessageStatus(user.messageStatus)}>
                    <Icons name="tick" width={12} />
                    <Icons name="tick" width={12} />
                  </UserMessageStatus>
                </UserMessageExampleParent>
              </div>
            </User>
          </Fade>
        ))}
      </Messages>
    </Wrapper>
  );
}

export default Users;
