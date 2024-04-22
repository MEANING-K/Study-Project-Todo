/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import Todo from '../Todo';

const TodosBox = styled.div`
  /* TodosContainer의 스타일 */
`;

// todos props를 받아서 사용하는 컴포넌트
export default function TodosContainer({ todos }) {
  return (
    <TodosBox>
      {/* todos 배열을 사용하여 각 할 일을 표시 */}
      {todos.map(todo => (
        <Todo key={todo.id} />
      ))}
    </TodosBox>
  );
}
