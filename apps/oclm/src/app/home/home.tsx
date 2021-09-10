import React from 'react';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div``;

export function Home(props: HomeProps) {
  return (
    <StyledHome>
      <h1>Welcome to home!</h1>
    </StyledHome>
  );
}

export default Home;
