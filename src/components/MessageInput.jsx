import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components/macro';
import imgImage from '../assets/img/image.svg';

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
  display: flex;
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
  margin-right: 8px;

  &.blue {
    background-color: #00bcd4;

    &:hover {
      background-color: #05e1fd;
    }
  }

  &:hover {
    background-color: #6ef173;
  }

  &:last-child {
    margin-right: 0px;
  }
`;

const ChatView = ({ onSend = () => {}, onUpload = () => {} }) => {
  const [value, setValue] = useState('');
  const ref = useRef();
  const [file, setFile] = useState();

  useEffect(() => {
    if (!file) {
      return;
    }
    const reader = new FileReader();

    reader.onloadend = e => {
      onUpload(e.target.result);
      setFile(null);
    };

    reader.readAsDataURL(file);
    // eslint-disable-next-line
  }, [file]);

  return (
    <Container>
      <TextArea
        placeholder="Enter a Message"
        value={value}
        onChange={e => setValue(e.target.value)}
      />

      <input
        style={{ display: 'none' }}
        ref={ref}
        type="file"
        onChange={e => setFile(e.target.files[0])}
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

        <Button
          className="blue"
          onClick={() => {
            ref.current.click();
          }}
        >
          <img src={imgImage} alt="⬆" />
        </Button>
      </Right>
    </Container>
  );
};

export default ChatView;
