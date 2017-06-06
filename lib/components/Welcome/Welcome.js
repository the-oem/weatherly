import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Welcome.css';

const Welcome = ({ changeLocation }) => {
  return (
    <section className='welcome-search'>
      <h2>welcome</h2>
      <SearchBar changeLocation={changeLocation} showButton={true} />
    </section>
  );
};

export default Welcome;
