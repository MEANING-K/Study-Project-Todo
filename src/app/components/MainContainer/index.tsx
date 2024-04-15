/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Info from '../Info';
import TodosContainer from '../TodosContainer';

const Box = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: aqua;
  width: 100%;
  height: 100vh;
`;

export default function MainContainer() {
  return (
    <Box>
      <Info />
      <TodosContainer />
    </Box>
  );
}
