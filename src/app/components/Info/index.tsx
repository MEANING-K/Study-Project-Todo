import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { CircularProgressBar } from '@tomickigrzegorz/react-circular-progress-bar';
import dayjs from 'dayjs';
import { RootState } from 'store/store'; // 상태 타입 경로 확인 필요

const now = dayjs();

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(2, 7, 21);
  color: white;
  margin: 0px;
  width: 100%;
  height: 15rem;
`;

const Span = styled.span`
  font-weight: bold;
  color: white;
  font-size: 3.375rem;
  margin-right: 3rem;
`;

export default function Info() {
  const checkboxStatus = useSelector(
    (state: RootState) => state.checkboxStatus,
  );
  const percent =
    checkboxStatus && checkboxStatus.total > 0
      ? (checkboxStatus.checked / checkboxStatus.total) * 100
      : 0;

  return (
    <Box>
      <Span>{now.format('YYYY.MM.DD')}</Span>
      <CircularProgressBar
        colorCircle="#0C1425"
        colorSlice="aqua"
        percent={percent}
        fontColor="aqua"
        round={true}
        fontSize="15px"
      ></CircularProgressBar>
    </Box>
  );
}
