import React, { Component } from 'react';
import './SearchBar.css';
import cities from '../../utils/largest1000cities';
import Tree from '@theoem/complete-me';
// const completeMe = require('@theoem/complete-me');

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      citiesTree: {},
      suggestions: [],
    };
  }

  componentDidMount() {
    this.state.citiesTree = new Tree();
    this.state.citiesTree.populate(cities.data);
  }

  checkKey(event) {
    this.setState({ suggestions: this.state.citiesTree.suggest(this.state.input) });
    if (event.key === 'Enter' && this.state.input.length > 0) {
      this.updateInput();
    }
  }

  updateInput(location = this.state.input) {
    this.props.changeLocation(location);
    this.setState({
      input: '',
      suggestions: [],
    });
  }

  render() {
    return (
      <div className='search-bar-btn' role='search'>
        <input className='search-bar'
          type='text'
          value={this.state.input}
          placeholder='Find weather by zip code or city, state'
          onKeyUp={(event) => this.checkKey(event)}
          onChange={(event) => this.setState({ input: event.target.value })}/>
        { this.props.showButton &&
          <button onClick={() => this.updateInput()}>search</button>
        }
        <div className='suggestions-container'>
          { this.state.suggestions.map((city, i) =>
            <div className='suggestion-div'
              key={i}
              onClick={() => this.updateInput(city)}>{city}
            </div>)
          }
        </div>
      </div>
    );
  }
}
