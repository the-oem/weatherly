import React, { Component } from 'react';
import './Welcome.css';
import SearchBar from '../SearchBar/SearchBar';

const Welcome = ({ changeLocation }) => {
  return (
    <section className='welcome-search'>
      <h2>welcome</h2>
      <SearchBar type='showButton' changeLocation={changeLocation}/>
    </section>
  );
};

export default Welcome;