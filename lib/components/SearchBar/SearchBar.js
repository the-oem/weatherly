import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  changeLocation(event) {
    if (event.key === 'Enter') {
      const location = document.querySelectorAll('.search-bar')[0].value +
        document.querySelectorAll('.search-bar')[1].value;
      // // couldn't get join('') to work above for some reason?

      // this.callAPI(location);
      // localStorage.setItem('location', location);
      document.querySelectorAll('.search-bar')[0].value = '';
      document.querySelectorAll('.search-bar')[1].value = '';
    } else {
      // console.log(event, event.key);
    }
  }

  render() {
    // console.log('type', type);
    // const showButton = (type === 'welcome') ? <button onClick={this.changeLocation}>search</button> : '';
    const showButton = <button onClick={this.changeLocation}>search</button>;

    return (
      <div>
        <input className='search-bar' type='text' placeholder='Find weather by zip
           code or city, state' onKeyUp={this.changeLocation}/>
        {showButton}
      </div>
    );
  }
}