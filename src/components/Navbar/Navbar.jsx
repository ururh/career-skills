import React from 'react';
import { NavLink } from 'react-router-dom';
import { List, Nav } from './Navbar.styled';


const Navbar = () => {
  return (
    <Nav>
      <List>
        <li>
          <NavLink to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink to="/catalog" >Catalog</NavLink>
        </li>
        <li>
          <NavLink to="/favorites" >Favorites</NavLink>
        </li>
      </List>
    </Nav>
  );
};

export default Navbar;
