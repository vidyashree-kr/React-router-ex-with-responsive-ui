import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Layout from './shared/Layout';
import Settings from './Application/Settings'
import Navigations from './Application/Navigations'
import AppContent from './Application/AppContent'
import Contacts from './Application/Contacts';
import Sidebar1 from './Application/Sidebar1';
import Sidebar2 from './Application/Sidebar2';
import Message from './Application/Message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
      <div>
      <Layout/> 
        <Switch>
          <Route path="/navigations">
            <Navigations />
          </Route>
          <Route path="/settings">
            <Settings />
          </Route>
          <Route  path="/Contacts">
            <Contacts />
          </Route>
          <Route path="/message">
            <Message />
          </Route>
          <Route path="/sidebar1">
            <Sidebar1 />
          </Route>
          <Route path="/sidebar2">
            <Sidebar2 />
          </Route>
          <Route path="/">
            <AppContent />
          </Route>
           </Switch>
      </div>
      <Route exact path="/Contacts">
            <Contacts />
          </Route>
    </Router>
      </div>
    );
  }
}

export default App;
