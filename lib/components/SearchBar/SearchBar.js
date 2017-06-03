import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  checkKey(event) {
    if (event.key === 'Enter') {
      this.changeLocation();
    }
  }

  changeLocation() {
    const location = document.querySelector('.search-bar').value;
    this.setLocation(location);

    this.getWeatherData(location);
    console.log('call api on', location);

    document.querySelectorAll('.search-bar')[0].value = '';
    document.querySelectorAll('.search-bar')[1].value = '';
  }

  setLocation(location) {
    localStorage.setItem('location', location);
  }

  render() {
    // const showButton = (type === 'showButton') ?
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