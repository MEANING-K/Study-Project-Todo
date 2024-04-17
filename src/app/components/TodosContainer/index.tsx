/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Todo from '../Todo';

const Box = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(2, 7, 21);
  color: white;
`;

export default function TodosContainer() {
  return (
    <Box>
      <Todo />
    </Box>
  );
}
