import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = ({ changeLocation }) => {
  return (
    <div className='header'>
      <h1 className='title'>weathrly</h1>
      <SearchBar onBlur={changeLocation}/>
      {/* // BUG: Need to code `onBlur` */}
    </div>
  );
};

export default Header;