import React from 'react';
import { createBrowserHistory } from 'history';
import { Header } from '@my-orgnization/oclm/ui-shared';

import { Route, Router, Switch } from 'react-router-dom';
import Home from './home/home';
import Users from './users/users';
const history = createBrowserHistory();

export function App() {
  return (
    <>
      <Header title="O'connell" />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/users" exact component={Users} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
