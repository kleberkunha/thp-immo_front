// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { loginUserWithCookie } from 'services/apiManager';

// PAGES IMPORTS
import Home from  'pages/Home/Home';
import Login from 'pages/Login/Login';
import Register from 'pages/Register/Register';
import AdProfile from 'pages/Apartment/Apartment';
import UserProfile from 'pages/UserProfile/UserProfile';
import CreateProperty from 'pages/CreateProperty/CreateProperty';
import Apartment from 'pages/Apartment/Apartment';

// COMPONENTS IMPORTS
import Navbar from 'components/Navbar/Navbar';
import Footer from 'components/Footer/footer';




function App() {

  const currentUser = useSelector((state) => state.users);
  const [isAuthTrue, setIsAuthTrue] = useState();
  // the loading will be used for private routes such as profile
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAuth().then(res => {
      setIsAuthTrue(res);
      // setLoading(false);
    })
  });


  const checkAuth = async() => {
    const a = await (loginUserWithCookie());
    if (a === true) {
      return true;
    } else {
      return false;
    }
  }

  // <Navbar auth={ isAuthTrue }/>

  return (
      <>
        <BrowserRouter>
          <Navbar auth={ isAuthTrue }/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/listing/:slug" exact component={Apartment}/>
            <Route path="/login" exact component={Login} /> 
            <Route path="/register" exact component={Register} />
            <Route path="/ApartmentsProfile" component={AdProfile} />
            <Route path="/profile" component={UserProfile} />
            <Route path="/create-property" component={CreateProperty}/>
</Switch>
          <Footer/>
        </BrowserRouter>
      </>
  );
}

export default App;
