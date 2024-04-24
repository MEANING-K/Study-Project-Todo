import React from 'react';
import styled from 'styled-components';
import Todo from '../Todo';

const TodosBox = styled.div`
  /* TodosContainer의 스타일 */
`;

export default function TodosContainer({ todos, setTodos }) {
  const handleDeleteTodo = id => {
    // 전달받은 id를 이용하여 todos 배열에서 삭제할 Todo 찾기
    const newTodos = todos.filter(todo => todo.id !== id);
    // setTodos 함수를 이용하여 todos 상태 업데이트
    setTodos(newTodos);
  };

  return (
    <TodosBox>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          id={todo.id}
          content={todo.content}
          onDelete={handleDeleteTodo}
        />
      ))}
    </TodosBox>
  );
}
