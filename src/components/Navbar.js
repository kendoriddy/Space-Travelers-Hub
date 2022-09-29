import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <ul className="navlist">
      <li>
        <NavLink to="/" className={(navlist) => (navlist.isActive ? 'active' : 'nav-items')} end>
          Rockets
        </NavLink>
      </li>
      <li>
        <NavLink to="/missions" className={(navlist) => (navlist.isActive ? 'active' : 'nav-items')}>
          Missions
        </NavLink>
      </li>
      |
      <li>
        <NavLink to="/profile" className={(navlist) => (navlist.isActive ? 'active' : 'nav-items')}>
          My Profile
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
