import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from  'pages/Home/Home';
import Login from 'pages/Login/Login';
import AdProfile from 'pages/Apartment/Apartment';

function App() {
  return (
      <>
        <BrowserRouter>

            <Switch>
              <Route path="/" exact component={Home}/>
              {/* <Route path="/register" exact component={Register} />*/}
              <Route path="/login" exact component={Login} /> }
              <Route path="/ApartmentsProfile" component={AdProfile} />
            </Switch>
        </BrowserRouter>
      </>
  );
}

export default App;
