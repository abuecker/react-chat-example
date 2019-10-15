import React from 'react';
import styled from 'styled-components/macro';
import moment from 'moment';
import { Container, Name, Time } from './Message';

const Img = styled.img`
  width: auto;
  max-width: 60%;
  border-radius: 6px;
`;

const Image = ({ message, isSender }) => {
  return (
    <Container className={isSender ? 'right' : ''}>
      <Name>{message.name}</Name>

      <Time>{moment(message.timstamp).format('LT')}</Time>

      <Img className={isSender ? 'is-sender' : ''} src={message.msg} alt="" />
    </Container>
  );
};

export default Image;
