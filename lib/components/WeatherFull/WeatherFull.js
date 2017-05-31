import React, { Component } from 'react';
import colorado from './test-data';
import './WeatherFull.css';
import $ from 'jquery';
import WeatherNow from '../WeatherNow/WeatherNow';
import WeatherHourly from '../WeatherHourly/WeatherHourly';
// import WeatherDaily from '../WeatherDaily/WeatherDaily';

export default class WeatherFull extends Component {
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
      daily: {},

    };
  }

  componentDidMount() {

  }

  getWeather() {
    // $.get();
  }

  render() {
    console.log(this.state.hourly.hours);
    // let props = this.state;
    let { now, hourly, daily } = this.state;

    return (
      <section className='weather-full'>
        <WeatherNow { ...now }/>
        <WeatherHourly { ...hourly }/>
        {/* <WeatherDaily /> */}
      </section>
    );
  }
}
