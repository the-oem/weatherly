import React, { Component } from 'react';
import $ from 'jquery';
import './Main.css';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import WeatherFull from '../WeatherFull/WeatherFull';


export default class Main extends Component {
  componentDidMount() {
    const location = localStorage.getItem('location');
    if (!location) {
      console.log('no location in storage');
    } else {
      // this.callAPI(location);
      this.callAPI(80203);
    }
  }

  changeLocation() {
    const location = document.querySelectorAll('.search-bar')[1].value;
    // might break once we hide the search in the header...easy to fix though
    // setState in WeatherFull? Or update local storage?
    this.callAPI(location);
  }

  callAPI(location) {
    $.get(`http://api.wunderground.com/api/b0004c055cb382e4/hourly/forecast10day/conditions/q/${location}.json`)
      .then(data => {
        console.log('API results', data);
        // update state in Weather Full?
      })
      .catch(error => console.log('catch', error))
  }

  render() {
    return (
      <main>
        <Header />
        <Welcome changeLocation={this.changeLocation.bind(this)}/>
        <WeatherFull />
      </main>
    );
  }
}