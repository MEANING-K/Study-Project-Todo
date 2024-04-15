/* eslint-disable prettier/prettier */
import React from 'react';
import styled, { CSSObject } from 'styled-components'; // styled-components에서 CSSObject를 함께 가져옵니다.

const Box = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: rgb(2, 7, 21);
  color: white;
  width: 100%;
  height: 100%;
`;

// h1에 적용된 margin을 제거하는 스타일
const h1Styles: CSSObject = {
  margin: 0,
};

export default function Header() {
  return (
    <Box>
      <h1 style={h1Styles}>Header</h1>
    </Box>
  );
}
