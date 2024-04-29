// CheckBox 컴포넌트
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { updateCheckboxStatus } from 'store/actions'; // 경로는 실제 프로젝트에 맞게 수정해주세요.

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
  const dispatch = useDispatch();

  useEffect(() => {
    // 여기에서 체크박스의 개수와 체크된 개수를 계산하고 업데이트합니다.
    // 실제 사용 시, 이 값을 동적으로 계산할 필요가 있습니다.
    const total = 10; // 예시 값
    const checked = isChecked ? 1 : 0; // 예시 값, 실제 로직에 맞게 조정 필요
    dispatch(updateCheckboxStatus(total, checked));
  }, [isChecked, dispatch]);

  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <CheckboxBtn checked={isChecked} onClick={handleClick} />
    </>
  );
}
