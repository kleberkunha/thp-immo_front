import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from  'pages/Home/index';
import AdProfile from 'pages/Apartments';
import './App.css';
import './pages/Apartments/style/style.scss';

function App() {
  return (
      <>
        <BrowserRouter>

            <Switch>
              <Route path="/Home" exact component={Home}/>
              <Route path="/register" />
              <Route path="/login" />
              <Route path="/ApartmentsProfile" component={AdProfile} />
            </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
