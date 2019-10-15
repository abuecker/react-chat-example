import React, { useContext, useRef, useEffect } from 'react';
import styled from 'styled-components/macro';
import { MessagesContext } from '../contexts/messages';
import Message from './Message';
import Image from './Image';

const Container = styled.div`
  flex: 1 1 100px;
  padding: 24px;
  box-sizing: border-box;
  overflow-y: auto;
  border: 1px solid white;
  border-radius: 6px;
  border: 1px solid #499c4d;
`;

const MessagesView = ({ who }) => {
  const { messages } = useContext(MessagesContext);
  const ref = useRef();

  /**
   * Scroll to the bottom when the messages update
   */
  useEffect(() => {
    ref.current.scrollTo(0, ref.current.scrollHeight);
  }, [messages]);

  return (
    <Container ref={ref}>
      {messages.map((msg, idx) => {
        switch (msg.type) {
          case 'image':
            return <Image isSender={msg.name === who} message={msg} />;
          default:
            return (
              <Message key={idx} isSender={msg.name === who} message={msg} />
            );
        }
      })}
    </Container>
  );
};

export default MessagesView;
