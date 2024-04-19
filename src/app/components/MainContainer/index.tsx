/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Info from '../Info';
import TodosContainer from '../TodosContainer';
import New from '../New';

const Box = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(2, 7, 21);
`;

export default function MainContainer() {
  return (
    <Box>
      <Info />
      <New />
      <TodosContainer />
    </Box>
  );
}
