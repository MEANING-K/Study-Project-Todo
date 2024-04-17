/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import TodoInput from '../TodoInput';

const Box = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2);
  color: black;
  width: 100%;
  height: 5rem;
`;

export default function Todo() {
  return (
    <Box>
      <TodoInput />
    </Box>
  );
}
