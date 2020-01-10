import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Course from './Course';
import HomePage from './home';

const Main = () => {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/Course' component={Course}></Route>
    </Switch>
  );
}

export default Main;