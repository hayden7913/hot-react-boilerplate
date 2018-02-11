import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TodoApp from './containers/TodoApp';
import Hello from './components/Hello';

export default (
  <div>
    <Switch>
      <Route exact path="/" component={TodoApp}/>
      <Route exact path="/hello" component={Hello}/>
    </Switch>
  </div>
);
