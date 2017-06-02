import React, { Component } from 'react';
import $ from 'jquery';
import scrubData from '../../scrubData';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import WeatherFull from '../WeatherFull/WeatherFull';
// import colorado from './test-data';
import './Main.css';


export default class Main extends Component {
  constructor() {
    super();
    this.state = {};
  }

  getLocation() {
    return localStorage.getItem('location');
  }

  componentDidMount() {
    if (this.getLocation()) {
      this.callAPI(this.getLocation());
    }
  }

  changeLocation() {
    const location = document.querySelectorAll('.search-bar')[1].value;
    // might break once we hide the search in the header...easy to fix though
    // setState in WeatherFull? Or update local storage?
    this.callAPI(location);
    localStorage.setItem('location', location);
  }

  callAPI(location) {
    if (parseInt(location, 10)) {
      $.get(`http://api.wunderground.com/api/b0004c055cb382e4/hourly/forecast10day/conditions/q/${location}.json`)
      .then(data => {
        this.setState(scrubData(data));
      })
      .catch(error => console.log('catch', error));
    } else {
      const cityStateArr = location.split(', ');
      $.get(`http://api.wunderground.com/api/b0004c055cb382e4/hourly/forecast10day/conditions/q/${cityStateArr[1]}/${cityStateArr[0]}.json`)
      .then(data => {
        this.setState(scrubData(data));
      })
      .catch(error => console.log('catch', error));
    }
  }

  toggleView(key) {
    this.setState({ [key]: !this.state[key] });
  }

  render() {
    let content;

    if (this.getLocation()) {
      content = <WeatherFull state={this.state} toggleView={this.toggleView.bind(this)}/>;
    } else {
      content = <Welcome changeLocation={this.changeLocation.bind(this)}/>;
    }

    return (
      <main>
        <Header changeLocation={this.changeLocation.bind(this)}/>
        {content}
      </main>
    );
  }
}