import React from 'react';
import styled from 'styled-components/macro';
import ChatView from './ChatView';
import { MessagesProvider } from '../contexts/messages';

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const DualChatView = () => {
  return (
    <Container>
      <MessagesProvider>
        <ChatView name="Skeeter" />
        <ChatView name="Bubba" />
      </MessagesProvider>
    </Container>
  );
};

export default DualChatView;
