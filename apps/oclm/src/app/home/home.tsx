import React from 'react';
import { Header } from '@my-orgnization/oclm/ui-shared';

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HomeProps {}

const StyledHome = styled.div``;

export function Home(props: HomeProps) {
  return (
    <Header
      content={null}
      bucketMain={[
        <StyledHome>
          <h1>Welcome to home!</h1>
        </StyledHome>,
      ]}
    />
  );
}

export default Home;
