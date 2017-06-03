import React, { Component } from 'react';
import './Welcome.css';
import SearchBar from '../SearchBar/SearchBar';

const Welcome = ({ getWeatherData }) => {
  return (
    <section className='welcome-search'>
      <h2>welcome</h2>
      <SearchBar type='showButton' getWeatherData={getWeatherData}/>
    </section>
  );
};

export default Welcome;