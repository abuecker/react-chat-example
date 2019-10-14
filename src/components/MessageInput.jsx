import React, { useState } from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex: 0 0 75px;
  padding-top: 16px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  flex: 1 1 200px;
  height: 100%;
  line-height: 1.61em;
  border: 1px solid #499c4d;
  border-radius: 6px;
  padding: 12px;
  box-sizing: border-box;
  background-color: black;
  color: #6ef173;
  font-weight: bold;
  font-size: 16px;
  outline: none;

  &::placeholder {
    font-style: italic;
    color: #316734;
    font-weight: normal;
  }
`;

const Right = styled.div`
  flex: 0 0 50px;
  height: 100%;
  padding-left: 12px;
  box-sizing: border-box;
`;

const Button = styled.button`
  height: 100%;
  border: 1px solid #499c4d;
  border-radius: 6px;
  padding: 6px;
  box-sizing: border-box;
  background-color: #499c4d;
  color: black;
  font-weight: bold;
  font-size: 16px;
  outline: none;

  &:hover {
    background-color: #6ef173;
  }
`;

const ChatView = ({ onSend = () => {} }) => {
  const [value, setValue] = useState('');

  return (
    <Container>
      <TextArea
        placeholder="Enter a Message"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <Right>
        <Button
          onClick={() => {
            onSend(value);
            setValue('');
          }}
        >
          Send
        </Button>
      </Right>
    </Container>
  );
};

export default ChatView;
