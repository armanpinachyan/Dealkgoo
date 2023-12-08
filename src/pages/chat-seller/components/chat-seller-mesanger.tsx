import React, { useEffect, useRef } from 'react';
import UserAvatar from '../../../features/user-avatar/user-avatar';
import Icons from '../../../features/icons/icons';
import PrintRating from '../../../features/print-rating/print-rating';
import user2 from '../../../assets/images/my-messages/user2.png';
import { GetUserMyMessageStatus } from '../../../utils/helpers';
import user1 from '../../../assets/images/my-messages/user1.png';
import SendMessage from '../../../features/send-message/send-message';
import styled from 'styled-components';
import { MessageStatus, UserOnlineStatus } from '../../../enums/enums';

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 230px);
  border-radius: 25px;
  background-color: #ffffff;
  padding: 20px;
  position: sticky;
  top: 100px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f3f3f6;
  padding-bottom: 20px;
  .userAvatars {
    display: flex;
    justify-content: start;
    align-items: start;
    .my {
      width: 48px;
      height: 48px;
      margin-left: -20px;
      border: 3px solid #fff;
      margin-top: -3px;
    }
  }
`;

const Messages = styled.div`
  width: 100%;
  height: calc(100% - 220px);
  overflow-y: auto;
  padding-right: 5px;
  padding-bottom: 20px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

const Data = styled.div`
  width: 90px;
  height: 30px;
  border-radius: 15px;
  background-color: #f8f9fc;
  margin: 50px auto;
  font-size: 14px;
  color: #babcc7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MessageItem = styled.div`
  display: flex;
  justify-content: start;
  align-items: end;
  margin-bottom: 27px;
  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
    margin-right: 18px;
    position: relative;
    bottom: 9px;
  }
`;

const MessageBody = styled.div`
  display: flex;
  justify-content: start;
  align-items: start;
  flex-direction: column;
`;

const Message = styled.div<{ $data: string }>`
  background-color: #f6f7ff;
  position: relative;
  font-size: 16px;
  color: #212121;
  font-weight: 300;
  border-radius: 15px 15px 15px 0;
  line-height: normal;
  margin-bottom: 9px;
  margin-right: 60px;
  padding: 16px 20px 16px 16px;

  .hashtag {
    cursor: pointer;
    color: #2763ff;
  }

  &:after {
    content: ${({ $data }) => `"${$data ? $data : ''}"`};
    position: absolute;
    right: 14px;
    bottom: 4px;
    font-size: 12px;
    color: #cfd1dd;
    text-align: right;
  }
`;

const MyMessageItem = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  img {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    object-fit: cover;
    margin-left: 18px;
    position: relative;
    bottom: 9px;
  }
`;

const MyMessageBody = styled.div`
  display: flex;
  justify-content: right;
  align-items: end;
  flex-direction: column;
`;

const MyMessage = styled.div<{ $data: string }>`
  background-color: #2763ff;
  border-radius: 15px 15px 0 15px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 300;
  padding: 12px 77px 12px 16px;
  margin-bottom: 9px;
  margin-left: 60px;
  position: relative;
  line-height: normal;
  &:after {
    content: ${({ $data }) => `"${$data ? $data : ''}"`};
    position: absolute;
    right: 40px;
    bottom: 7px;
    font-size: 12px;
    color: #cfd1dd;
    text-align: right;
  }
`;
const Reading = styled.div<{ $status: string }>`
  display: flex;
  justify-content: end;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 15px;
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

const Error = styled.div`
  width: calc(100% + 40px);
  position: relative;
  left: -20px;
  height: 60px;
  background-color: #f6f7ff;
  display: flex;
  justify-content: start;
  align-items: center;
  border-left: 5px solid #ff4567;
  padding-left: 16px;
  font-size: 16px;
  color: #212121;
  font-weight: 300;
  svg {
    margin-right: 20px;
  }
  span {
    color: #2763ff;
    cursor: pointer;
    margin: 0 6px;
  }
`;

const user = {
  name: 'GuiltyClip',
  time: '16:35',
  example: 'Спасибо, что используете мои с...',
  image: user2,
  status: UserOnlineStatus.offline,
  messageStatus: MessageStatus.noRead
};

const user_me = {
  name: 'FunSense',
  time: '16:35',
  example: 'Спасибо, что используете мои с...',
  image: user1,
  status: UserOnlineStatus.online,
  messageStatus: MessageStatus.read
};

function ChatSellerMessenger() {
  const messages = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    messages.current?.scrollTo(0, 3000);
  }, [messages]);

  return (
    <Wrapper>
      <Header>
        <div className="d-flex justify-content-start align-items-center">
          <div className="userAvatars">
            <UserAvatar user={user} />
            <UserAvatar user={user_me} onlineStatus className="my" />
          </div>
          <div>
            <p className="mb-0 fs-18 c-black fw-bold">
              ExodusTrust
              <Icons
                name="rss"
                width={16}
                color="#d6d9ef"
                className="cursor-pointer ms-2"
                colorHover="#2763ff"
              />
            </p>
            <p className="mb-0 fs-14 c-grey">Был(а) в сети 4ч назад</p>
          </div>
        </div>
        <div className="d-flex justify-content-end align-items-center">
          <span className="me-2 fs-16 fw-bold">Оценить:</span>
          <PrintRating rate={2} successRating />
        </div>
      </Header>
      <Messages ref={messages}>
        <Data>10.08.2023</Data>
        <MessageItem>
          <img src={user2} alt="user avatar" />
          <MessageBody>
            <Message $data="19:30">
              Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в
              19:00 я готов продать дома буду как раз и мы все сделаем с тобой
            </Message>
            <Message $data="19:30">
              По твоей заявке <span className="hashtag">#256489</span> одобрен возврат денег
            </Message>
          </MessageBody>
        </MessageItem>
        <MessageItem>
          <img src={user2} alt="user avatar" />
          <MessageBody>
            <Message $data="19:30">Привет, как дела ?</Message>
          </MessageBody>
        </MessageItem>

        <MyMessageItem>
          <MyMessageBody>
            <MyMessage $data="15:00">
              Привет, я получил по почте уведомление
              <Reading $status={GetUserMyMessageStatus(user_me.messageStatus)}>
                <Icons name="tick" width={12} />
                <Icons name="tick" width={12} />
              </Reading>
            </MyMessage>
            <MyMessage $data="15:00">
              Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в
              19:00 я готов продать дома буду как раз и мы все сделаем с тобой
              <Reading $status={GetUserMyMessageStatus(user.messageStatus)}>
                <Icons name="tick" width={12} />
                <Icons name="tick" width={12} />
              </Reading>
            </MyMessage>
          </MyMessageBody>
          <img src={user1} alt="user avatar" />
        </MyMessageItem>

        <Data>10.09.2023</Data>
        <MessageItem>
          <img src={user2} alt="user avatar" />
          <MessageBody>
            <Message $data="19:30">
              Привет, как дела ? ты когда решил покупать товар этот будешь. Давай завтра вечером в
              19:00 я готов продать дома буду как раз и мы все сделаем с тобой
            </Message>
            <Message $data="19:30">
              По твоей заявке <span className="hashtag">#256489</span> одобрен возврат денег
            </Message>
          </MessageBody>
        </MessageItem>
        <MessageItem>
          <img src={user2} alt="user avatar" />
          <MessageBody>
            <Message $data="19:30">Привет, как дела ?</Message>
          </MessageBody>
        </MessageItem>

        <MyMessageItem>
          <MyMessageBody>
            <MyMessage $data="15:00">
              Привет, я получил по почте уведомление
              <Reading $status={GetUserMyMessageStatus(user_me.messageStatus)}>
                <Icons name="tick" width={12} />
                <Icons name="tick" width={12} />
              </Reading>
            </MyMessage>
          </MyMessageBody>
          <img src={user1} alt="user avatar" />
        </MyMessageItem>
      </Messages>

      <Error>
        <Icons name="info" width={24} color="#ff4567" />
        <div>
          Исполнитель <span>DrySavage</span> готов выполнить заказ <span>№25082</span> Аккаунт
          <p className="c-grey mb-0">Warface за 60 ранг быстро по низкой стоимости</p>
        </div>
      </Error>

      <SendMessage />
    </Wrapper>
  );
}

export default ChatSellerMessenger;
