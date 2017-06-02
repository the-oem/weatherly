import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <h1 className='title'>weathrly</h1>
      <SearchBar type='header'/>
    </div>
  );
};

export default Header;