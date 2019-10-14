import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 22px;

  &.right {
    align-items: flex-end;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

const Time = styled.div`
  font-size: 0.8em;
  font-style: italic;
  line-height: 1.61;
  color: #a2a2a2;
  margin-bottom: 8px;
`;

const Name = styled.div`
  font-weight: bold;
  line-height: 1.61;
`;

const Msg = styled.div`
  color: black;
  background-color: #00bcd4;
  width: auto;
  max-width: 60%;
  padding: 12px;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 1em;
  line-height: 1.61;

  &.is-sender {
    background-color: #6ef173;
  }
`;

const Line = styled.div`
  margin-bottom: 8px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Message = ({ message, isSender }) => {
  return (
    <Container className={isSender ? 'right' : ''}>
      <Name>{message.name}</Name>

      <Time>{moment(message.timstamp).format('LT')}</Time>

      <Msg className={isSender ? 'is-sender' : ''}>
        {message.msg.split(/\n/).map(m => (
          <Line>{m}</Line>
        ))}
      </Msg>
    </Container>
  );
};

export default Message;
