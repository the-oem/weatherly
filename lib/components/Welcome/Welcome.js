import React, { Component } from 'react';
import './Welcome.css';
import SearchBar from '../SearchBar/SearchBar';

export default class Welcome extends Component {
  render() {
    return (
      <section className='welcome-search'>
        <h2>welcome</h2>
        <SearchBar />
        <button>search</button>
      </section>
    );
  }
}