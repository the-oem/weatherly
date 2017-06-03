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
    const location = document.querySelector('.search-bar').value;

    this.state.input = location;
    this.setState(this.state);

    // this.setState({input: location});

    // console.log('after', this.state);
    this.props.changeLocation(this.state.input);

    this.state.input = '';
    this.setState(this.state);
  }

  render() {
    return (
      <div>
        <input className='search-bar'
          // value={this.state.input}
          type='text'
          placeholder='Find weather by zip code or city, state'
          onKeyUp={(event) => this.checkKey(event)}/>
        <button onClick={() => this.updateInput()}>search</button>
      </div>
    );
  }
}