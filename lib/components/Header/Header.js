import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

const Header = ({ getWeatherData }) => {
  return (
    <div className='header'>
      <h1 className='title'>weathrly</h1>
      <SearchBar type='showButton' getWeatherData={getWeatherData}/>
    </div>
  );
};

export default Header;