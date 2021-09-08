import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = ({auth}) => {
  return (
    <div className="navigation d-flex align-items-center">
      <div className="nav-left col-6">
        <NavLink exact to="/" activeClassName="nav-active">
          Accueil
        </NavLink>
        <NavLink exact to="/listing" activeClassName="nav-active">
          One appartment
        </NavLink>
        {auth && (
          <NavLink exact to="/profile" activeClassName="nav-active">
            Profile
          </NavLink>
        )}
      </div>
      <div className="nav-right col-6 d-flex justify-content-end">
        {!auth && (
            <>
              <NavLink exact to="/register" className="btn btn-primary mx-2">
                Sign Up
              </NavLink>
              <NavLink exact to="/login" className="btn btn-primary mx-2">
                Log In
              </NavLink>
            </>
          )}
          {auth && (
            // <button onClick={ () => handleLogOut() } className="btn btn-danger mx-2"> Log Out </button>
            <button className="btn btn-danger mx-2"> Log Out </button>
          )}
      </div>

    </div>
  );
};

export default Navbar;