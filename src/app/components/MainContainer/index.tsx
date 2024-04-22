/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
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
  const [todos, setTodos] = useState([]);

  return (
    <Box>
      <Info />
      <New setTodos={setTodos} />
      <TodosContainer todos={todos} />
    </Box>
  );
}
