import React from 'react';
import styled from 'styled-components/macro';

const Container = styled.div`
  display: flex;
  padding-bottom: 16px;
  box-sizing: border-box;
  align-items: baseline;
  justify-content: flex-end;
`;

const Input = styled.input`
  line-height: 1.61em;
  border: 1px solid #499c4d;
  border-radius: 6px;
  padding: 6px;
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

const Label = styled.div`
  color: #4da250;
  margin-right: 12px;
  font-size: 12px;
`;

const TextInput = ({ label, value, onChange = () => {} }) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input placeholder="Enter a name" value={value} onChange={onChange} />
    </Container>
  );
};

export default TextInput;
