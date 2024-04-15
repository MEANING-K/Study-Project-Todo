/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(2, 7, 21);
  color: white;
`;

export default function TodosContainer() {
  return (
    <Box>
      <h1>TodosContainer</h1>
    </Box>
  );
}
