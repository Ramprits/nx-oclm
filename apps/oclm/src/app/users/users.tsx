import { useState } from 'react';
import React, { useEffect } from 'react';

import styled from 'styled-components';
import { User } from './user.model';

/* eslint-disable-next-line */
export interface UsersProps {}

const StyledUsers = styled.div``;

export function Users(props: UsersProps) {
  const [state, setState] = useState<{
    data: User[];
    loadingState: 'success' | 'error' | 'loading';
  }>({ data: [], loadingState: 'success' });

  useEffect(() => {
    setState((s) => ({ ...s, loadingState: 'loading' }));
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((x) => x.json())
      .then((res) => {
        setState((s) => ({ ...s, data: res, loadingState: 'success' }));
      })
      .catch((err) => {
        setState((s) => ({ ...s, loadingState: 'error' }));
      });
  }, []);

  return (
    <StyledUsers>
      {state.loadingState === 'loading'
        ? 'Loading please wait...'
        : state.loadingState === 'error'
        ? '<div>Loading error...</div>'
        : state.data.map((u) => <div key={u.id}>{u.name}</div>)}
    </StyledUsers>
  );
}

export default Users;
