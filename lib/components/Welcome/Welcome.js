import React, { Component } from 'react';
import './Welcome.css';
import SearchBar from '../SearchBar/SearchBar';

const Welcome = () => {
  return (
    <section className='welcome-search'>
      <h2>welcome</h2>
      <SearchBar type='welcome'/>
    </section>
  );
}

export default Welcome;