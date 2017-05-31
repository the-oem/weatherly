import React, { Component } from 'react';
import './WeatherFull.css';
import WeatherNow from '../WeatherNow/WeatherNow';
// import WeatherHourly from '../WeatherHourly/WeatherHourly';
// import WeatherDaily from '../WeatherDaily/WeatherDaily';

export default class WeatherFull extends Component {
  constructor() {
    super();
    this.state = {
      today: 'Wednesday, September 22',
      cityState: 'Denver, Colorado',
      currentTemp: 65,
      currentCondition: 'Partly Cloudy',
      todayHigh: 112,
      todayLow: 0,
      todayCondition: 'Windy, chance of a few late night showers. Lows overnight in the mid 50s.',
    };
  }

  render() {
    let props = this.state;

    return (
      <section>
        <WeatherNow { ...props }/>
        {/* <WeatherHourly />
        <WeatherDaily /> */}
      </section>
    );
  }
}