import React, { Component } from 'react';
import $ from 'jquery';
import './Main.css';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import WeatherFull from '../WeatherFull/WeatherFull';
import colorado from './test-data';


export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      now: {
        today: colorado.current_observation.local_time_rfc822,
        currentTemp: colorado.current_observation.temp_f,
        currentCondition: colorado.current_observation.weather,
        todayHigh: colorado.forecast.simpleforecast.forecastday[0].high.fahrenheit,
        todayLow: colorado.forecast.simpleforecast.forecastday[0].low.fahrenheit,
        cityState: colorado.current_observation.display_location.full,
        todayCondition: colorado.forecast.txt_forecast.forecastday[0].fcttext,
      },
      hourly: {
        hours: [...colorado.hourly_forecast],
      },
      daily: {
        days: [...colorado.forecast.simpleforecast.forecastday],
      },
      showHourly: true,
      showDaily: false,
    };
  }

  getLocation() {
    return localStorage.getItem('location');
  }

  componentDidMount() {
    if (!this.getLocation()) {
      console.log('no location in storage');
    } else {
      // this.callAPI(location);
      this.callAPI(48118);
    }
  }

  changeLocation() {
    const location = document.querySelectorAll('.search-bar')[1].value;
    // might break once we hide the search in the header...easy to fix though
    // setState in WeatherFull? Or update local storage?
    this.callAPI(location);
  }

  callAPI(location) {
    // if (parseInt(location, 10)) {
    //   $.get(`http://api.wunderground.com/api/b0004c055cb382e4/hourly/forecast10day/conditions/q/${location}.json`)
    //   .then(data => {
    //     console.log('API results by Zip Code', data);
    //   })
    //   .catch(error => console.log('catch', error))
    // } else {
    //   const cityStateArr = location.split(', ');
    //   $.get(`http://api.wunderground.com/api/b0004c055cb382e4/hourly/forecast10day/conditions/q/${cityStateArr[1]}/${cityStateArr[0]}.json`)
    //   .then(data => {
    //     console.log('API results by City, ST', data);
    //   })
    //   .catch(error => console.log('catch', error))
    // }
    // update state in Weather Full?
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