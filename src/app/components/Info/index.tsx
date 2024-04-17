/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';
import { CircularProgressBar } from '@tomickigrzegorz/react-circular-progress-bar';
import dayjs from 'dayjs';

const now = dayjs();
now.format('YYYY.MM.DD');

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
  return (
    <Box>
      <Span>{now.format('YYYY.MM.DD')}</Span>
      <CircularProgressBar
        colorCircle="#0C1425"
        colorSlice="aqua"
        percent={80}
        fontColor="aqua"
        round={true}
        fontSize="15px"
      ></CircularProgressBar>
    </Box>
  );
}
