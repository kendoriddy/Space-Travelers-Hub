import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Bars, Nav, NavBtn, NavBtnLink, NavMenu,
} from './NavbarElement';

const Navbar = () => (
  <>
    <Nav>
      <Bars />

      <NavMenu>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/events" activeStyle>
          Events
        </NavLink>
        <NavLink to="/annual" activeStyle>
          Annual Report
        </NavLink>
        <NavLink to="/team" activeStyle>
          Teams
        </NavLink>
        <NavLink to="/blogs" activeStyle>
          Blogs
        </NavLink>
        <NavLink to="/sign-up" activeStyle>
          Sign Up
        </NavLink>
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/signin">Sign In</NavBtnLink>
      </NavBtn>
    </Nav>
  </>
);

export default Navbar;
