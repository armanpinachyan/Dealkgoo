import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import user2 from '../../../assets/images/my-messages/user2.png';
import { MessageStatus, UserOnlineStatus } from '../../../enums/enums';
import support from '../../../assets/images/support.png';
import Icons from '../../../features/icons/icons';
import PrintRating from '../../../features/print-rating/print-rating';
import { GetUserMyMessageStatus } from '../../../utils/helpers';
import SendMessage from '../../../features/send-message/send-message';

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
  }
  .res-icon {
    position: relative;
    bottom: 2px;
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
  image: support,
  status: UserOnlineStatus.online,
  messageStatus: MessageStatus.read
};

const SupportAvatar = styled.div`
  width: 40px;
  min-width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #2763ff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 19px;
`;

const MessageType = styled.div`
  border-radius: 20px;
  background-color: #f3f3f6;
  border: 1px solid #f3f3f6;
  font-size: 16px;
  color: #212121;
  font-weight: 500;
  text-align: center;
  padding: 12px 18px;
  margin-right: 9px;
  white-space: nowrap;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`;

function MessageSupport() {
  const messages = useRef<null | HTMLDivElement>(null);

  useEffect(() => {
    messages.current?.scrollTo(0, 3000);
  }, [messages]);
  return (
    <Wrapper>
      <Header>
        <div className="d-flex justify-content-start align-items-center">
          <div className="userAvatars">
            <SupportAvatar className="my">
              <Icons name="headphones" width={20} color="#fff" />
            </SupportAvatar>
          </div>
          <div>
            <p className="mb-0 fs-18 c-black fw-bold">
              Support №106200
              <Icons
                name="rss"
                width={16}
                color="#d6d9ef"
                className="cursor-pointer ms-2 res-icon"
                colorHover="#2763ff"
              />
            </p>
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
          <SupportAvatar className="my">
            <Icons name="headphones" width={20} color="#fff" />
          </SupportAvatar>
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
          <SupportAvatar className="my">
            <Icons name="headphones" width={20} color="#fff" />
          </SupportAvatar>
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
          <img src={user2} alt="user avatar" />
        </MyMessageItem>

        <Data>10.09.2023</Data>
        <MessageItem>
          <SupportAvatar className="my">
            <Icons name="headphones" width={20} color="#fff" />
          </SupportAvatar>
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
          <SupportAvatar className="my">
            <Icons name="headphones" width={20} color="#fff" />
          </SupportAvatar>
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
          <img src={user2} alt="user avatar" />
        </MyMessageItem>
      </Messages>

      <div className="d-flex justify-content-center align-items-center pt-3">
        <MessageType>Финансы</MessageType>
        <MessageType>Сделка</MessageType>
        <MessageType>Форум</MessageType>
        <MessageType>Нашел ошибку</MessageType>
        <MessageType>Другое</MessageType>
      </div>
      <SendMessage />
    </Wrapper>
  );
}

export default MessageSupport;
