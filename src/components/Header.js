import React from 'react';
import Navbar from './Navbar';
import logo from '../assets/images/planet.png';

const Header = () => (
  <header>
    <div className="left-bar">
      <img src={logo} alt="logo" />
      <h3>Space Traveler&apos;s Hub</h3>
    </div>
    <Navbar />
  </header>
);

export default Header;
