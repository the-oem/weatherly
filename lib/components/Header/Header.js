import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = ({ showSearch, changeLocation }) => {
  return (
    <div className='header'>
      <h1 className='title'>weathrly</h1>
      {showSearch &&
        <SearchBar changeLocation={changeLocation}/>
      }
    </div>
  );
};

export default Header;