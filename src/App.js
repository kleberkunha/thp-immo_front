// CONFIG IMPORTS
import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
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

  const dispatch = useDispatch()
  const currentUser = useSelector((state) => state.users);
  const [isAuthTrue, setIsAuthTrue] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    checkAuth().then(res => {
      setIsAuthTrue(res);
      // setLoading(false);
    })
  });

  const getListings = () => {
    dispatch(listingsFetch())
  }

  const loginUserWithCookie = async() =>{
    const token = Cookies.get('token');
    const id = Cookies.get('id');

    const cookiesConfig = {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        // Authorization: `${token}`,
      },
    };
  
    const response = await fetch(`http://localhost:3000/api/users/${id}`, cookiesConfig)
    const cookieData = await response.json();
    console.log(cookieData);
    if (!cookieData.error) {
      console.log("is true");
      return true;
    } else {
      console.log("is false");
      return false;
    }

  };

  const checkAuth = async() => {
    const a = await (loginUserWithCookie());
    if (currentUser || a === true) {
      return true;
    } else {
      return false;
    }
  }

   {/* <Navbar auth={ isAuthTrue }/> */}

  return (
      <>
        <BrowserRouter>
         
          <Navbar />
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
