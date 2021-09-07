import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navigation">
      <NavLink exact to="/" activeClassName="nav-active">
        Accueil
      </NavLink>
      <NavLink exact to="/" activeClassName="nav-active">
        Blog
      </NavLink>
      <NavLink exact to="/profileUser" activeClassName="nav-active">
        Profile
      </NavLink>
      <NavLink exact to="/admProfile" activeClassName="nav-active">
       ADM Profile
      </NavLink>
    </div>
  );
};

export default Navbar;