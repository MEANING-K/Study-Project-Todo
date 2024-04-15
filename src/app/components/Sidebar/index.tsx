/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(68, 21, 28);
  color: white;
  width: 30%;
  height: 100vh;
`;

export default function Sidebar() {
  return (
    <Box>
      <h1>Sidebar</h1>
    </Box>
  );
}
