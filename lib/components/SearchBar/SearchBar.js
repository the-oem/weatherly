import React, { Component } from 'react';
import './SearchBar.css';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
  }

  checkKey(event) {
    if (event.key === 'Enter') {
      this.updateInput();
    }
  }

  updateInput() {
    // console.log('before', this.state);
    const location = document.querySelectorAll('.search-bar')[0].value +
      document.querySelectorAll('.search-bar')[1].value;

    this.state.input = location;
    // console.log(this.state.input);

    this.setState(this.state);
    console.log('after', this.state);
    this.props.changeLocation(this.state.input);

    this.state.input = '';
    this.setState(this.state);
  }

  render() {
    // const showButton = (type === 'showButton') ?
      // <button onClick={this.changeLocation}>search</button> : '';
    const showButton = <button onClick={() => this.props.changeLocation(this.state.input)}>search</button>;

    return (
      <div>
        <input className='search-bar' type='text' placeholder='Find weather by zip
           code or city, state' onKeyUp={this.checkKey.bind(this)}/>
        {showButton}
      </div>
    );
  }
}