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
    if (event.key === 'Enter' && this.state.input.length > 0) {
      this.updateInput();
    }
  }

  updateInput() {
    this.props.changeLocation(this.state.input);
    this.setState({ input: '' });
  }

  render() {
    return (
      <div>
        <input className='search-bar'
          type='text'
          value={this.state.input}
          placeholder='Find weather by zip code or city, state'
          onKeyUp={(event) => this.checkKey(event)}
          onChange={(event) => this.setState({ input: event.target.value })}/>
        <button onClick={() => this.updateInput()}>search</button>
      </div>
    );
  }
}
