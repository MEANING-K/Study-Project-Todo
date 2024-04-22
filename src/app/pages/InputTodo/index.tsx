/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일드 컴포넌트를 사용하여 Input을 스타일링합니다.
const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 3rem;
  margin: 1rem;
  background-color: transparent;
  color: white;
`;

// InputTodo 컴포넌트를 정의합니다.
const InputTodo: React.FC<{ addTodo: (content: string) => void }> = ({
  addTodo,
}) => {
  // 입력된 내용을 관리하는 상태를 설정합니다.
  const [content, setContent] = useState<string>('');

  // 할 일을 추가하는 함수를 정의합니다.
  const handleAddTodo = () => {
    // 입력된 내용이 비어있지 않은 경우에만 할 일을 추가합니다.
    if (content.trim() !== '') {
      addTodo && addTodo(content);
      setContent(''); // 입력 창을 비웁니다.
    }
  };

  // 입력된 내용이 변경될 때마다 상태를 업데이트합니다.
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  // Enter 키를 누르면 할 일을 추가합니다.
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <Input
      type="text"
      placeholder="할 일을 입력해주세요"
      value={content}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default InputTodo;
