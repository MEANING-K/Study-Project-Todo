/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styled from 'styled-components';
import TodosContainer from '../TodosContainer';

const Container = styled.div`
  display: flex;
  justify-content: flex-end; /* NewTodoBox를 오른쪽에 위치시키기 위해 추가 */
`;

const NewTodoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 15px 20px;
  color: white;
  cursor: pointer;
  padding: 10px auto;
  width: 150px;
`;

const Text = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
  margin-left: 6px;
`;

export default function New({ setTodos }) {
  const [todos] = useState([]);

  const handleNewTodo = () => {
    const newTodo = {
      id: Math.random(),
      text: '새로운 할 일',
    };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  return (
    <Container>
      {' '}
      {/* 오른쪽 정렬을 위한 컨테이너 */}
      <NewTodoBox onClick={handleNewTodo}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="35"
          viewBox="0 -960 960 960"
          width="35"
        >
          <path d="M453-280h60v-166h167v-60H513v-174h-60v174H280v60h173v166Zm27.266 200q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z" />
        </svg>
        <Text>New To-do</Text>
      </NewTodoBox>
      <TodosContainer todos={todos} />
    </Container>
  );
}
