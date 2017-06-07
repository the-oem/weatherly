import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Welcome.css';

const Welcome = ({ changeLocation, resultsState }) => {
  return (
    <section className='welcome-search'>
      <h2>welcome</h2>
      <SearchBar
        changeLocation={changeLocation}
        showButton={true}
        resultsState={resultsState} />
    </section>
  );
};

export default Welcome;
