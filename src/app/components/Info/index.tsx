/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(162, 128, 85);
  color: white;
`;

export default function Info() {
  return (
    <Box>
      <h1>Info</h1>
    </Box>
  );
}
