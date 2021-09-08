// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
import Cookies from 'js-cookie';

// PAGES IMPORTS
import Home from  'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import AdProfile from 'pages/Apartment/Apartment';
import ProfileUser from './pages/ProfileUser/profileUser';
import AdmProfile from 'pages/AdmProfile/AdmProfile';
import Apartment from 'pages/Apartment/Apartment';

// COMPONENTS IMPORTS
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/footer';


function App() {

  const currentUser = useSelector((state) => state.userReducer.user);
  const [isAuthTrue, setIsAuthTrue] = useState();
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAuth().then(res => {
      setIsAuthTrue(res);
      // setLoading(false);
    })
  });

  const checkAuth = async() => {
    const a = await (loginUserWithCookie());
    if (currentUser || a === true) {
      return true;
    } else {
      return false;
    }
  }


  return (
      <>
        <BrowserRouter>
          <Navbar auth={ isAuthTrue }/>
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
