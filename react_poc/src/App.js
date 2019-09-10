import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import LoginForm from './Component/Loginform/LoginForm';
import Dashboard from './Component/Dashboard/Dashboard';
// <Route path="/" component={LoginForm} />

function App() {
  return (
  <div className="App">
    <BrowserRouter>
      <Switch>
       
        <Route path="/" component={Dashboard} />    
      </Switch>
    </BrowserRouter>
   
  </div>
  );
}

export default App;
