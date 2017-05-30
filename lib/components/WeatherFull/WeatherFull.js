import React, { Component } from 'react';
import './WeatherFull.css';
import WeatherNow from '../WeatherNow/WeatherNow';
import WeatherHourly from '../WeatherHourly/WeatherHourly';
import WeatherDaily from '../WeatherDaily/WeatherDaily';

export default class WeatherFull extends Component {
  render() {
    return (
      <section>
        <WeatherNow />
        <WeatherHourly />
        <WeatherDaily />
      </section>
    );
  }
}