import Cookies from 'js-cookie';
import React from 'react';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logoutUser } from 'services/apiManager';

const HamburgerMenu = ({ auth }) => {

    const dispatch = useDispatch();

    const handleLogOut = () => {
      Cookies.remove("token_cookie");
      Cookies.remove("id_cookie");
      dispatch(logoutUser);
      window.location.reload();
    };
  
  const handleMenu = () => {
    document.querySelector('.span1').classList.toggle("clicked");
    document.querySelector('.span2').classList.toggle("clicked");
    document.querySelector('.span3').classList.toggle("clicked");
    document.querySelector('.menu').classList.toggle("clicked");
  }

  return (
    <>
      <div className="hamburger-box" onClick={handleMenu}>
        <span className="span1"></span>
        <span className="span2"></span>
        <span className="span3"></span>
      </div>
      <div className="menu">
        <NavLink
          exact
          to="/"
          className="menu-link"
          activeClassName="nav-active"
        >
          Accueil
        </NavLink>
        <NavLink
          exact
          to="/listing"
          className="menu-link"
          activeClassName="nav-active"
        >
          One appartment
        </NavLink>
        {auth && (
          <NavLink
            exact
            to="/profile"
            className="menu-link"
            activeClassName="nav-active"
          >
            Profile
          </NavLink>
        )}
        {!auth && (
          <>
            <NavLink exact to="/register" className="menu-link">
              Sign Up
            </NavLink>
            <NavLink exact to="/login" className="menu-link">
              Log In
            </NavLink>
          </>
        )}
        {auth && (
          <>
            <NavLink exact to="/create-property" className="menu-link">
              <i className="fas fa-plus-circle"></i>Ajouter une annonce
            </NavLink>
            <button
              onClick={() => handleLogOut()}
              className="btn btn-danger mx-2"
            >
              {" "}
              Log Out{" "}
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default HamburgerMenu;