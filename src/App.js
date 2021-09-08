import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from  'pages/Home/Home';
import Login from 'pages/Login/Login';
import AdProfile from 'pages/Apartment/Apartment';
import UserProfile from 'pages/UserProfile/UserProfile';
import Footer from 'components/Footer/footer';


function App() {
  return (
    <>
      <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}/>
            {/* <Route path="/register" exact component={Register} />*/}
            <Route path="/login" exact component={Login} /> }
            <Route path="/ApartmentsProfile" component={AdProfile} />
            <Route path="/profile" component={UserProfile} />
          </Switch>
          <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
