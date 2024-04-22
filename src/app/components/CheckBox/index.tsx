/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import styled from 'styled-components';

/* function Checkbox({ text }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <StyledLabel htmlFor={text}>
        <StyledInput
          type="checkbox"
          id={text}
          name={text}
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <StyledP>{text}</StyledP>
      </StyledLabel>
    </>
  );
}

export default Checkbox;

const StyledLabel = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  margin-left: 20px;

  &:before {
    content: '';
    height: 1.5rem;
    width: 1.5rem;
    background-color: white;
    border: 2px solid gainsboro;
    border-radius: 50%;
  }

  &:after {
    opacity: 0;
    content: '';
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    border: 2px solid transparent;
    border-radius: 50%;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3e%3cdefs%3e%3cstyle%3e.cls-1{fill:none;}%3c/style%3e%3c/defs%3e%3cg id='frame'%3e%3crect class='cls-1' height='32' width='32'/%3e%3c/g%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z' fill='white'/%3e%3cpath d='M16,29A13,13,0,1,1,29,16,13,13,0,0,1,16,29ZM16,5A11,11,0,1,0,27,16,11,11,0,0,0,16,5Z' fill='white'/%3e%3c/svg%3e");
    background-size: 100% 100%;
    background-position: 50%;
    background-repeat: no-repeat;
    background-color: lime;
  }
`;

// visually-hidden
const StyledInput = styled.input`
  position: absolute;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  white-space: nowrap;
  width: 1px;

  &:checked + ${StyledLabel} {
    :after {
      opacity: 1;
    }
  }
`;

const StyledP = styled.p`
  margin-left: 0.5rem;
` */

const CheckboxBtn = styled.input.attrs({ type: 'checkbox' })`
  margin-left: 1.5rem;
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  border: 2px solid #ccc;
  border-radius: 50%;
  background-color: transparent;
  transition: background-color 0.3s;

  &:checked {
    background-color: aqua;
  }
`;

export default function Checkbox() {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <CheckboxBtn checked={isChecked} onClick={handleClick} />
    </>
  );
}
