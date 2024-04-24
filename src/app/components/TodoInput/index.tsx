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

export default function TodoInput({
  addTodo,
  isEditing,
  editContent,
  editModeTodo,
  editTodo,
}: {
  addTodo?: (content: string) => void;
  isEditing?: boolean;
  editContent?: string;
  editModeTodo?: () => void;
  editTodo?: (content: string) => void;
}) {
  const [content, setContent] = React.useState<string>(editContent || '');
  const [isEditMode, setIsEditMode] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isEditing) {
      setIsEditMode(true);
    } else {
      setIsEditMode(false);
    }
  }, [isEditing]);

  return (
    <Box isEditing={isEditing}>
      <Input
        type="text"
        placeholder="할 일을 입력해주세요"
        value={content}
        onBlur={e => {
          if (e.currentTarget === e.target) {
            if (!isEditMode) {
              editTodo && editTodo(content);
            }
          }
        }}
        onChange={e => setContent(e.target.value)}
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
