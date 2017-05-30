import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  render() {
    return (
      <input className='search-bar' type='text' placeholder='Find weather by zip
         code or city, state'/>
    );
  }
}