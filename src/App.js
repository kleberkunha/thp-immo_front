import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from  'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import AdProfile from 'pages/Apartment/Apartment';
import ProfileUser from './pages/ProfileUser/profileUser';
import AdmProfile from 'pages/AdmProfile/AdmProfile';
import Footer from 'components/Footer/footer';
import Apartment from 'pages/Apartment/Apartment';

function App() {
  return (
      <>
        <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/register" exact component={Register} />
              <Route path="/login" exact component={Login} /> }
              <Route path="/ApartmentsProfile" component={AdProfile} />
              <Route path="/listing" component={Apartment} />
              <Route path="/profile" component={ProfileUser} />
              <Route path="/AdmProfile" component={AdmProfile} />
            </Switch>
            <Footer/>
        </BrowserRouter>
      </>
  );
}

export default App;
