import React, { useState } from 'react';
import Login from './Login';
import ForgetPassword from './ForgetPassword';
import{ BrowserRouter as Router, Route, Switch, Link} from "react-router-dom"

export default function(){
    return(
      <Router>
        <Switch>
          <Route exact path="/forget" component={ForgetPassword}/> 
          <Route exact path="/" component={Login}/> 
        </Switch>
      </Router>
    );
}
