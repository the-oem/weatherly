import React, { Component } from 'react';
import './Welcome.css';
import SearchBar from '../SearchBar/SearchBar';

export default class Welcome extends Component {
  render() {
    return (
      <section className='welcome-search'>
        <SearchBar />
        <button>search</button>
      </section>
    );
  }
}