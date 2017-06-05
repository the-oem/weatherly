import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = ({ showSearch, changeLocation }) => {
  return (
    <div className='header' role='banner'>
      <h1 className='title'>weathrly</h1>
      {showSearch &&
        <SearchBar changeLocation={changeLocation} showButton={false}/>
      }
    </div>
  );
};

export default Header;