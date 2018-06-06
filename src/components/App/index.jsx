'use strict';

import React from 'react';
import {Route, Switch} from "react-router-dom";

import Home from 'scenes/home';
import Login from 'scenes/login';
import {Wrapper} from './styles';

const DynamicContent = () => (
  <Wrapper>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/login" component={Login}/>
    </Switch>
  </Wrapper>
);

export default DynamicContent;
