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
      <div>
        <SearchBar />
      </div>
    );
  }
}