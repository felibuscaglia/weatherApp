import React from 'react';
import Logo from '../img/logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav({ onSearch }) {
  return (
    <div id="navigate">
      <Link to="/">
        <img src={Logo} id="logoHenry"></img>
        <h3 id="title">Henry - Weather App</h3>
      </Link>
      <SearchBar onSearch={onSearch} />
      <Link to="/about">
        <span id="about">About <i class="far fa-map"></i></span>
      </Link>
    </div>
  );
};

export default Nav;
