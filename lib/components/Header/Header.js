import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './Header.css';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className='header'>
        <h1 className='title'>weathrly</h1>
        <SearchBar />
      </div>
    );
  }
}