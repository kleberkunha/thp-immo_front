import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from  'pages/Home/Home';
import Login from 'pages/Login/Login';
import AdProfile from 'pages/Apartment/Apartment';
import ProfileUser from './pages/ProfileUser/profileUser';
import AdmProfile from 'pages/AdmProfile/AdmProfile';
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
              <Route path="/ProfileUser" component={ProfileUser} />
              <Route path="/AdmProfile" component={AdmProfile} />
            </Switch>
            <Footer/>
        </BrowserRouter>
      </>
  );
}

export default App;
