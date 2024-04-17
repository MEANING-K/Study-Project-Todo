import * as React from 'react';
import styled from 'styled-components';
import MainContainer from 'app/components/MainContainer';
import Sidebar from 'app/components/Sidebar';
import { Helmet } from 'react-helmet-async';

const Box = styled.div`
  display: flex;
`;

export function HomePage() {
  return (
    <>
      <Helmet>
        <title>Main</title>
        <meta name="description" content="MEANING To-do Main" />
      </Helmet>
      <Box>
        <Sidebar />
        <MainContainer />
      </Box>
    </>
  );
}
