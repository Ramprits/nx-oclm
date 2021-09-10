import React from 'react';
import { createBrowserHistory } from 'history';
import { Header } from '@my-orgnization/oclm/ui-shared';

import { Route, Router, Switch } from 'react-router-dom';
import Home from './home/home';
const history = createBrowserHistory();
  
export function App() {
  return (
    <>
      <Header />
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
