/* eslint-disable prettier/prettier */
// MainContainer.tsx
import React from 'react';
import styled from 'styled-components';
import TodosContainer from 'app/components/TodosContainer';
import NewButton from 'app/components/NewButton';
import TodoInput from 'app/components/TodoInput';
import { useSelector, useDispatch } from 'react-redux';
import Info from 'app/components/Info';
import { State } from './reducers'; // 수정된 import 구문
import { addTodo } from './actions';

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
  const todos = useSelector((state: State) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (content: string) => {
    dispatch(addTodo(content));
  };

  return (
    <Box>
      <Info />
      <NewTodoContainer>
        <TodoInput addTodo={handleAddTodo} />
        <NewButton addTodo={handleAddTodo} />
      </NewTodoContainer>
      <TodosContainer todos={todos} setTodos={() => {}} />
    </Box>
  );
}
