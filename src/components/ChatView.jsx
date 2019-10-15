import React, { useState, useContext } from 'react';
import MessageInput from './MessageInput';
import MessagesView from './MessagesView';
import styled from 'styled-components/macro';
import { MessagesContext } from '../contexts/messages';
import TextInput from './TextInput';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 100px;
  height: 100%;
  padding: 28px;
  box-sizing: border-box;

  &:first-child {
    border-right: 4px solid #002f35;
  }
`;

const ChatView = ({ name = '' }) => {
  const [displayName, setDisplayName] = useState(name);

  const { publish } = useContext(MessagesContext);

  return (
    <Container>
      <TextInput
        label="Name:"
        value={displayName}
        onChange={e => setDisplayName(e.target.value)}
      />

      <MessagesView who={displayName} />

      <MessageInput
        onSend={val => publish(displayName, val)}
        onUpload={dataUrl => publish(displayName, dataUrl, 'image')}
      />
    </Container>
  );
};

export default ChatView;
