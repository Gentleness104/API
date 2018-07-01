import React, { Component } from 'react';

import { Route } from "react-router-dom";

import LoginScreen from './Screen/LoginScreen';



class App extends Component {
  render() {
    return (
      <div>
      <Route exact path={'/'} component={LoginScreen} />
      </div>
    );
  }
}

export default App;
