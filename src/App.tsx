import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import appStore from './store/store';

import "./App.sass"

import "normalize.css"

import 'bootstrap/dist/css/bootstrap.min.css'

import Home from "./views/Page/Home"
import Enter from "./views/Page/Enter"
import Lobby from './views/Lobby';

import "./App.sass"

class App extends Component
{
  render()
  {
    return (
      <Provider store={appStore}>
      <Router>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/enter" component={Enter} />
          <Route path="/lobby" component={Lobby} />
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
      </Provider>
    );
  }
}

export default App;
