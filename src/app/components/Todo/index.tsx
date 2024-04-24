import React, { useState } from 'react';
import styled from 'styled-components';
import Checkbox from '../CheckBox';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.2);
  color: black;
  width: 100%;
  height: 5rem;
`;

const CheckInput = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 30px;
`;

const SharedInputStyles = `
  border: none;
  outline: none;
  background-color: transparent;
  color: white;
  font-size: 20px;

  margin-left: 10px;
  width: 100%;
`;

const EditInput = styled.input`
  ${SharedInputStyles}
  text-decoration: underline;
`;

const EditButton = styled.button`
  border: none;
  outline: 0;
  width: 50px;
  height: 40px;
  margin-right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  cursor: pointer;
`;

const DeleteButton = styled.button`
  border: none;
  outline: 0;
  width: 50px;
  height: 40px;
  margin-right: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  color: white;
  cursor: pointer;
  margin-bottom: 3px;
`;

const Span = styled.div`
  ${SharedInputStyles}
  text-align: left;
  font-weight: 600;

  &:checked {
    color: gray;
  }
`;

interface TodoProps {
  id: number;
  content: string;
  onDelete: (id: number) => void;
}

export default function Todo({ id, content, onDelete }: TodoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newContent, setNewContent] = useState(content);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = e => {
    setNewContent(e.target.value);
  };

  const handleInputBlur = () => {
    setIsEditing(false);
    console.log('새로운 내용:', newContent);
  };

  const handleInputKeyPress = e => {
    if (e.key === 'Enter') {
      handleInputBlur();
    }
  };

  const handleDeleteTodo = () => {
    onDelete(id);
  };

  return (
    <Box>
      <CheckInput>
        <Checkbox />
        {isEditing ? (
          <EditInput
            type="text"
            value={newContent}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyPress={handleInputKeyPress}
          />
        ) : (
          <Span>{newContent}</Span>
        )}
      </CheckInput>
      <ButtonGroup>
        <EditButton type="button" onClick={handleEditClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24"
            viewBox="0 -960 960 960"
            width="24"
          >
            <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
          </svg>
        </EditButton>
        <DeleteButton type="button" onClick={handleDeleteTodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="27"
            viewBox="0 -960 960 960"
            width="27"
          >
            <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
          </svg>
        </DeleteButton>
      </ButtonGroup>
    </Box>
  );
}
