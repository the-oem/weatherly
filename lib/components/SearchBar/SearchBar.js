import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  checkKey(event) {
    if (event.key === 'Enter') {
      this.changeLocation();
    }
  }

  changeLocation() {
    const location = document.querySelectorAll('.search-bar')[0].value +
    document.querySelectorAll('.search-bar')[1].value;

    console.log('call api on', location);
    // this.callAPI(location);

    // localStorage.setItem('location', location);

    document.querySelectorAll('.search-bar')[0].value = '';
    document.querySelectorAll('.search-bar')[1].value = '';
  }

  render() {
    // const showButton = (type === 'welcome') ?
      // <button onClick={this.changeLocation}>search</button> : '';
    const showButton = <button onClick={this.changeLocation}>search</button>;

    return (
      <div>
        <input className='search-bar' type='text' placeholder='Find weather by zip
           code or city, state' onKeyUp={this.checkKey.bind(this)}/>
        {showButton}
      </div>
    );
  }
}