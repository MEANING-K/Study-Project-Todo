import React from 'react';
import styled from 'styled-components';

const Box = styled.div<{ isEditing?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border: none;
  outline: 0;
  width: 100%;
  height: 3rem;
  margin: 1rem;
  background-color: transparent;
  color: white;
`;

interface TodoInputProps {
  addTodo?: (content: string) => void;
  isEditing?: boolean;
  editContent?: string;
  editTodo?: (content: string) => void;
}

export default function TodoInput({
  addTodo,
  isEditing,
  editContent,
  editTodo,
}: TodoInputProps) {
  const [content, setContent] = React.useState<string>(editContent || '');

  React.useEffect(() => {
    if (isEditing) {
      setContent(editContent || '');
    }
  }, [isEditing, editContent]);

  return (
    <Box isEditing={isEditing}>
      <Input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={content}
        onChange={e => setContent(e.target.value)}
        onBlur={() => editTodo && editTodo(content)}
        onKeyPress={e => {
          if (content === '') return;
          if (e.key !== 'Enter' && e.key !== 'NumpadEnter') return;
          addTodo && addTodo(content);
          setContent('');
        }}
      />
    </Box>
  );
}
