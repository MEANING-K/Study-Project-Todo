import React, { useState } from 'react';
import styled from 'styled-components';
import Info from '../Info';
import TodosContainer from '../TodosContainer';
import TodoInput from '../TodoInput';

const Box = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(2, 7, 21);
`;

const NewTodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function MainContainer() {
  const [todos, setTodos] = useState<{ id: number; content: string }[]>([]);

  return (
    <Box>
      <Info />
      <NewTodoContainer>
        <TodoInput
          addTodo={content => {
            if (content.trim() !== '') {
              setTodos([...todos, { id: todos.length + 1, content }]);
            }
          }}
        />
      </NewTodoContainer>
      <TodosContainer todos={todos} setTodos={setTodos} />
    </Box>
  );
}
