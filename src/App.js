import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from './pages/Login.jsx';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Nav from './components/Nav.jsx'


class App extends Component {

  render() {
    return (
      <BrowserRouter>

        <Nav />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login} />
          <Route path="*" component={NotFound} />
        </Switch>

      </BrowserRouter>
    );
  }
}

export default App;
